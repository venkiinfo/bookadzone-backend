const authenticationRepository = require("../repositories/authenticationRepository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");



class AuthenticationService {
    async authLogin(data) {
        try {
            const { email, password } = data;
            const user = await authenticationRepository.findUserByEmail(email);

            if (!user) {
                throw new Error("Email does not exist");
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error("Invalid password for user");
            }

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    password: user.password, 
                    role: user.role,
                },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRE_TIME }
            );

            // Remove password before sending back the response
            //const { password: _, ...userWithoutPassword } = user._doc;
            delete user['password'];
            return { token, data: user };
        } catch (error) {
            throw error;
        }
    }

    async forgotPassword(data) {

        console.log("Inside Service of forgot password")
        const { email } = data;
       
            const user = await authenticationRepository.findUserByEmail(email);

            if (!user) {
                throw new Error("User doesn't exist");
            }
    
            const secret = process.env.JWT_SECRET + user.password;
            const token = jwt.sign({ id: user._id, email: user.email }, secret);
    
            const resetURL = `http://localhost:5000/api/v1/auth/resetpassword?id=${user._id}&token=${token}`;
    
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.EMAIL,
                  pass: process.env.APP_PASSWORD
                },
              });
    
              const mailOptions = {
                to: user.email,
                from: process.env.EMAIL,
                subject: 'Password Reset Request',
                text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                Please click on the following link, or paste this into your browser to complete the process:\n\n
                ${resetURL}\n\n
                If you did not request this, please ignore this email and your password will remain unchanged.\n`,
              };
    
              try {
                const info = await transporter.sendMail(mailOptions);
                console.log(`Email sent: ${info.response}`);
                //return 'Check your email for instructions on resetting your password';
                return {message:'Check your email for instructions on resetting your password', emailSentTo: user.email, resetURL };
            } catch (error) {
                console.error("Email sending failed:", error);
                throw new Error("Error sending email");
            }
        
        
        
    }

    async resetPassword(req) {
        const { id, token } = req.query;
        const { password } = req.body;
        console.log(id,"id");
        try{
            const user =  await authenticationRepository.findUserById(id);

            if (!user) {
                throw new Error("User doesn't exist");
            }
    
            const secret = process.env.JWT_SECRET + user.password;
    
            const verify = jwt.verify(token, secret);
            console.log(verify,"verification");
            
            const encryptedPassword = await bcrypt.hash(password, 10);
    
    
            await authenticationRepository.updatePassword(id,encryptedPassword)
            await authenticationRepository.saveUser(user)
    
            return 'Password has been reset';
    
        }catch(err){
          throw new Error(err);
        }
                
        
    }
}

module.exports = new AuthenticationService();

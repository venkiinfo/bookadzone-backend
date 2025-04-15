const authenticationService = require("../services/authenticationService");
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require("../utils/httpResponse");

class AuthenticationController {
    async authLogin(req, res) {
        try {
            console.log(req.body,"----Body----");
            const authData = await authenticationService.authLogin(req.body);
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Logged in successfully",
                ...authData
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ success: HTTP_RESPONSE.FAIL, message: err.message });
        }
    }


    async authForgetPassword(req,res){
            try{
                    const  forgetPasswordResponse = await authenticationService.forgotPassword(req.body);
                    res.status(HTTP_STATUS_CODE.OK).json({
                        status: HTTP_RESPONSE.SUCCESS,
                        message: forgetPasswordResponse.message,
                        link:forgetPasswordResponse.resetURL
                       
                    });
            }catch(err){
                    res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ success: HTTP_RESPONSE.FAIL, message: err.message });
            }
    }


    async authResetPassword(req,res){
        try{
            const  resetPasswordResponse = await authenticationService.resetPassword(req);
            res.status(HTTP_STATUS_CODE.OK).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: resetPasswordResponse,
               
            });
        }catch(err){
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ success: HTTP_RESPONSE.FAIL, message: err.message });
        }
    }
}
module.exports = new AuthenticationController();

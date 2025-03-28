const Setting = require("../models/settingModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthenticationRepository {
    async authLogin(data) {
        try {
            const { email, password } = data;

            let modelName;
            if (email === process.env.ADMIN_EMAIL) {
                modelName = Setting;
            } else {
                // modelName = User;
            }

            const user = await modelName.findOne({ email }).select("_id email password role status");
            if (!user) {
                throw new Error('Email does not exist');
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error('Invalid password for user');
            }

            const token = jwt.sign({ id: user._id, email: user.email, password: user.password, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_TIME });
            delete user['password'];

            return { token, data: user };
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new AuthenticationRepository();

const jwt = require('jsonwebtoken');
const Setting = require('../models/settingModel');
const { HTTP_STATUS_CODE, HTTP_RESPONSE } = require('../utils/httpResponse');

const excludedPath = [
    'auth/login',
    'auth/register',
    'auth/forgotpassword',
    'auth/resetpassword',
]

const authenticate = async (req, res, next) => {

    try {
        let apiPath = req.path.replace('/api/v1/', '');
        if (excludedPath.includes(apiPath)) {
            return next();
        } else {
            const accessToken = req.headers['authorization'];
            if (!accessToken) return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({ status: HTTP_RESPONSE.FAIL, message: 'Access Denied' });
            try {
                const result = await jwt.verify(accessToken, process.env.JWT_SECRET);
                if (!result) {
                    return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({ status: HTTP_RESPONSE.FAIL, message: 'Invalid Token. Please contact an admin' });
                }

                let modelName;
                if (result.email === process.env.ADMIN_EMAIL) {
                    modelName = Setting;
                } else {
                    // modelName = User;
                }

                const userData = await modelName.findOne({ _id: result.id }).select("password");

                if (!userData) {
                    return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({ status: HTTP_RESPONSE.FAIL, message: 'Please contact an admin' });
                }

                if (userData?.isactive === "inactive") {
                    return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({ status: HTTP_RESPONSE.FAIL, message: 'Your account has been blocked. Please contact an admin' });
                }

                if (userData?.password !== result.password) {
                    return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({ status: HTTP_RESPONSE.FAIL, message: 'Password has been changed' });
                }

                req.id = result._id;
                req.email = result.email;
                req.accountdetails = result;
                return next();
            } catch (error) {
                if (error.name === 'TokenExpiredError') {
                    return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({ status: HTTP_RESPONSE.FAIL, message: 'Session Expired. Please login again' });
                } else if (error.name === 'JsonWebTokenError') {
                    return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({ status: HTTP_RESPONSE.FAIL, message: 'Invalid Token. Please login again' });
                } else {
                    return res.status(HTTP_STATUS_CODE.FORBIDDEN).json({ status: HTTP_RESPONSE.FAIL, message: 'Internal Server Error' });
                }
            }
        }
    } catch (err) {
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, message: err.message });
    }
};

module.exports = { authenticate };
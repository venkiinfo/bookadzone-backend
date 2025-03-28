const jwt = require('jsonwebtoken');
const { baseUrl } = require('../routes');


const excludedPath = [
    'auth/login',
    'auth/register',
    'auth/forgotpassword',
    'auth/resetpassword',
]

const authenticate = async (req, res, next) => {

    console.log("req", req);
    console.log("req", req.path);

    try {
        let apiPath = req.path.replace('/api/v1/', '');
        if (excludedPath.includes(apiPath)) {
            return next();
        } else {
            const accessToken = req.headers['authorization'];
            if (!accessToken) return res.status(401).json({ status: false, message: 'Access Denied' });
    console.log("accessToken", accessToken);
            try {
                const result = await jwt.verify(accessToken, process.env.JWT_SECRET);

                if (!result) {
                    return res.status(403).json({ status: 0, message: 'Invalid Token. Please contact an admin' });
                }

                // const userData = await User.findById(result._id);

                if (userData.isactive) {
                    return res.status(403).json({ status: 0, message: 'Your account has been blocked. Please contact an admin' });
                }

                if (!result.password) {
                    return res.status(403).json({ status: 0, message: 'Password not found in token' });
                }

                req.ID = result._id;
                req.email = result.email;
                req.accountdetails = result;
                req.role = result.role;
                return next();
            } catch (error) {
    console.log("error", error);
    if (error.name === 'TokenExpiredError') {
                    return res.status(401).json({ status: false, message: 'Session Expired. Please login again' });
                } else if (error.name === 'JsonWebTokenError') {
                    return res.status(403).json({ status: false, message: 'Invalid Token. Please login again' });
                } else {
                    return res.status(500).json({ status: false, message: 'Internal Server Error' });
                }
            }
        }
    } catch (err) {
        res.status(400).json({ status: false, message: 'Invalid Token' });
    }
};

module.exports = { authenticate };
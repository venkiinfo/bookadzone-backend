const authenticationService = require("../services/authenticationService");

class AuthenticationController {
    async authLogin(req, res) {
        try {
            const authData = await authenticationService.authLogin(req.body);
            res.status(200).json({
                success: true,
                message: "Logged in successfully",
                ...authData
            });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
}
module.exports = new AuthenticationController();

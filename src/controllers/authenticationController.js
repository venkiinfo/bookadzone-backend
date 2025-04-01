const authenticationService = require("../services/authenticationService");
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require("../utils/httpResponse");

class AuthenticationController {
    async authLogin(req, res) {
        try {
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
}
module.exports = new AuthenticationController();

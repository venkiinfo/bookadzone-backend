const authenticationRepository = require("../repositories/authenticationRepository");

class AuthenticationService {
    async authLogin(data) {
        return await authenticationRepository.authLogin(data);
    }
}

module.exports = new AuthenticationService();

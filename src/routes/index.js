const upload = require("../utils/fileupload");

const BaseUrl = '/api/v1/';
module.exports = function (app) {
    app.use(BaseUrl + "faqs", require("../routes/faqRoutes"));
    app.use(BaseUrl + "auth", require("../routes/authenticationRoutes"));
    app.use(BaseUrl + "site-settings", require("../routes/siteSettingsRoutes"));
    app.use(BaseUrl + "footer-info", require("../routes/footerInfoRoutes"));
}

exports.baseUrl = BaseUrl;
const BaseUrl = '/api/v1/';
module.exports = function (app) {
    app.use(BaseUrl + "faqs", require("../routes/faqRoutes"));
    app.use(BaseUrl + "admins", require("../routes/adminRoutes"));
    app.use(BaseUrl + "agencys", require("../routes/agencyRoutes"));
    app.use(BaseUrl + "auth", require("../routes/authenticationRoutes"));
    app.use(BaseUrl + "site-settings", require("../routes/siteSettingsRoutes"));
}

exports.baseUrl = BaseUrl;
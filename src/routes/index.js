const BaseUrl = '/api/v1/';
module.exports = function (app) {
    app.use(BaseUrl + "faqs", require("../routes/faqRoutes"));
    app.use(BaseUrl + "auth", require("../routes/authenticationRoutes"));
    app.use(BaseUrl + "site-settings", require("../routes/siteSettingsRoutes"));
    app.use(BaseUrl + "pages", require("../routes/pagesRoutes"));

}

exports.baseUrl = BaseUrl;
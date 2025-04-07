const BaseUrl = '/api/v1/';
module.exports = function (app) {
    app.use(BaseUrl + "faqs", require("../routes/faqRoutes"));
    app.use(BaseUrl + "newsletters", require("../routes/newsletterRoutes"));
}

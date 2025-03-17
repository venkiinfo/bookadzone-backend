const BaseUrl = '/api/v1/';
module.exports = function (app) {
    app.use(BaseUrl + "faqs", require("../routes/faqRoutes"));
}

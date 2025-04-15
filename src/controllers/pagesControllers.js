const pageService = require("../services/pagesService");
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require("../utils/httpResponse");

class PageController {
    async createPage(req, res) {
        // console.log("Controller")
        try {
            const page = await pageService.createPage(req.body);
            res.status(201).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Page created",
                data: page
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message
            });
        }
    }

    async getAllPages(req, res) {
        try {
            const pages = await pageService.getAllPages();
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                data: pages
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message
            });
        }
    }

    async getPageById(req, res) {
        try {
            const page = await pageService.getPageById(req.params.id);
            if (!page) {
                return res.status(404).json({
                    status: HTTP_RESPONSE.FAIL,
                    message: "Page not found"
                });
            }
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                data: page
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message
            });
        }
    }

    async updatePage(req, res) {
        try {
            const page = await pageService.updatePage(req.params.id, req.body);
            if (!page) {
                return res.status(404).json({
                    status: HTTP_RESPONSE.FAIL,
                    message: "Page not found"
                });
            }
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Page updated",
                data: page
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message
            });
        }
    }

    async softDeletePage(req, res) {
        try {
            const page = await pageService.softDeletePage(req.params.id);
            if (!page) {
                return res.status(404).json({
                    status: HTTP_RESPONSE.FAIL,
                    message: "Page not found"
                });
            }
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Page deleted successfully"
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message
            });
        }
    }
}

module.exports = new PageController();

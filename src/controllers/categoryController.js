const categoryService = require("../services/categoryService");
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require("../utils/httpResponse");

class CategoryController {
    async createCategory(req, res) {
        try {
            const category = await categoryService.createCategory(req.body);
            res.status(201).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Category created successfully",
                data: category,
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }

    async getAllCategories(req, res) {
        try {
            const categories = await categoryService.getAllCategories();
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                data: categories,
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }

    async getCategoryById(req, res) {
        try {
            const category = await categoryService.getCategoryById(req.params.id);
            if (!category) {
                return res.status(404).json({
                    status: HTTP_RESPONSE.FAIL,
                    message: "Category not found",
                });
            }
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                data: category,
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }

    async updateCategory(req, res) {
        try {
            const category = await categoryService.updateCategory(req.params.id, req.body);
            if (!category) {
                return res.status(404).json({
                    status: HTTP_RESPONSE.FAIL,
                    message: "Category not found",
                });
            }
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Category updated successfully",
                data: category,
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }

    async softDeleteCategory(req, res) {
        try {
            const category = await categoryService.softDeleteCategory(req.params.id);
            if (!category) {
                return res.status(404).json({
                    status: HTTP_RESPONSE.FAIL,
                    message: "Category not found",
                });
            }
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Category deleted successfully",
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }
}

module.exports = new CategoryController();

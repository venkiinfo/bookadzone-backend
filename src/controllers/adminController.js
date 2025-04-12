const adminService = require("../services/adminServices");
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require("../utils/httpResponse");


class adminController {
    async createAdmin(req, res) {
        try {
            console.log("----3---");
            const admin = await adminService.createAdmin(req.body);
            console.log("----1---",req.body);       
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "Admin created", data: admin });
        } catch (err) {
            console.log("----2---");
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });

        }
    }

    async getAllAdmins(req, res) {
        try {
            const admins = await adminService.getAllAdmins();
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, data: admins });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async getAdminById(req, res) {
        try {
            const admin = await adminService.getAdminById(req.params.id);
            if (!admin) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "Admin not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, data: admin });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async updateAdmin(req, res) {
        try {
            const admin = await adminService.updateAdmin(req.params.id, req.body);
            if (!admin) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "ADMIN not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "ADMIN updated", data: admin });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async softDeleteAdmin(req, res) {
        try {
            const admin = await adminService.softDeleteAdmin(req.params.id);
            if (!admin) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "ADMIN not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "ADMIN deleted successfully" });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }
}

module.exports = new adminController();

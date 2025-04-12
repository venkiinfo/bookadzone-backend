const agencyServices = require("../services/agencyServices");
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require("../utils/httpResponse");


class agencyController {
    async createAgency(req, res) {
        try {
            const agency = await agencyServices.createAgency(req.body);
            console.log("----1---",req.body);       
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "Agency created", data: agency });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });

        }
    }

    async getAllAgencys(req, res) {
        try {
            const agencys = await agencyServices.getAllAgencys();
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, data: agencys });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async getAgencyById(req, res) {
        try {
            const agency = await agencyServices.getAgencyById(req.params.id);
            if (!agency) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "Agency not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, data: agency });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async updateAgency(req, res) {
        try {
            const agency = await agencyServices.updateAgency(req.params.id, req.body);
            if (!agency) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "Agency not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "Agency updated", data: agency });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async softDeleteAgency(req, res) {
        try {
            const agency = await agencyServices.softDeleteAgency(req.params.id);
            if (!agency) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "Agency not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "Agency deleted successfully" });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }
}

module.exports = new agencyController();

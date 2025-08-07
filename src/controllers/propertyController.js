const propertyService = require("../services/propertyService");
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require("../utils/httpResponse");

class PropertyController {
    async createProperty(req, res) {
        try {
            const property = await propertyService.createProperty(req.body);
            res.status(201).json({ status: HTTP_RESPONSE.SUCCESS, message: "PROPERTY created", data: property });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async getAllProperty(req, res) {
        try {
            const propertys = await propertyService.getAllProperties();
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, data: propertys });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async getPropertyById(req, res) {
        try {
            const property = await propertyService.getPropertyById(req.params.id);
            if (!property) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "PROPERTY not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, data: property });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async updateProperty(req, res) {
        try {
            const property = await propertyService.updateProperty(req.params.id, req.body);
            if (!property) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "PROPERTY not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "PROPERTY updated", data: property });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async softDeleteProperty(req, res) {
        try {
            const property = await propertyService.softDeleteProperty(req.params.id);
            if (!property) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "PROPERTY not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "PROPERTY deleted successfully" });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }
}

module.exports = new PropertyController();

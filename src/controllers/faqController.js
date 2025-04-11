const faqService = require("../services/faqService");
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require("../utils/httpResponse");

class FaqController {
    async createFaq(req, res) {
        try {
            const faq = await faqService.createFaq(req.body);
            res.status(201).json({ status: HTTP_RESPONSE.SUCCESS, message: "FAQ created", data: faq });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async getAllFaqs(req, res) {
        try {
            const faqs = await faqService.getAllFaqs();
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, data: faqs });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async getFaqById(req, res) {
        try {
            const faq = await faqService.getFaqById(req.params.id);
            if (!faq) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "FAQ not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, data: faq });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async updateFaq(req, res) {
        try {
            const faq = await faqService.updateFaq(req.params.id, req.body);
            if (!faq) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "FAQ not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "FAQ updated", data: faq });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }

    async softDeleteFaq(req, res) {
        try {
            const faq = await faqService.softDeleteFaq(req.params.id);
            if (!faq) return res.status(404).json({ status: HTTP_RESPONSE.FAIL, message: "FAQ not found" });
            res.status(200).json({ status: HTTP_RESPONSE.SUCCESS, message: "FAQ deleted successfully" });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err.message });
        }
    }
}

module.exports = new FaqController();

const faqService = require("../services/faqService");

class FaqController {
    async createFaq(req, res) {
        console.log('----------------req')
        try {
            const faq = await faqService.createFaq(req.body);
            res.status(201).json({ message: "FAQ created", data: faq });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAllFaqs(req, res) {
        try {
            const faqs = await faqService.getAllFaqs();
            res.status(200).json({ data: faqs });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getFaqById(req, res) {
        try {
            const faq = await faqService.getFaqById(req.params.id);
            if (!faq) return res.status(404).json({ message: "FAQ not found" });
            res.status(200).json({ data: faq });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateFaq(req, res) {
        try {
            const faq = await faqService.updateFaq(req.params.id, req.body);
            if (!faq) return res.status(404).json({ message: "FAQ not found" });
            res.status(200).json({ message: "FAQ updated", data: faq });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async softDeleteFaq(req, res) {
        try {
            const faq = await faqService.softDeleteFaq(req.params.id);
            if (!faq) return res.status(404).json({ message: "FAQ not found" });
            res.status(200).json({ message: "FAQ deleted successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new FaqController();

const newsletterService = require("../services/newsletterService");
const mongoose = require("mongoose");

class NewsletterController {
    async createNewsletter(req, res) {
        try {
            const newsletter = await newsletterService.createNewsletter(req.body);
            res.status(201).json({ message: "Newsletter created", data: newsletter });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAllNewsletters(req, res) {
        try {
            const newsletters = await newsletterService.getAllNewsletters();
            res.status(200).json({ data: newsletters });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getNewsletterById(req, res) {
        try {
            const newsletter = await newsletterService.getNewsletterById(req.params.id);
            if (!newsletter) return res.status(404).json({ message: "Newsletter not found" });
            res.status(200).json({ data: newsletter });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateNewsletter(req, res) {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
                return res.status(400).json({ message: "Invalid ID format" });
            }

            const newsletter = await newsletterService.updateNewsletter(req.params.id, req.body);
            if (!newsletter) return res.status(404).json({ message: "Newsletter not found" });
            res.status(200).json({ message: "Newsletter updated", data: newsletter });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async softDeleteNewsletter(req, res) {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
                return res.status(400).json({ message: "Invalid ID format" });
            }
            const newsletter = await newsletterService.softDeleteNewsletter(req.params.id);
            if (!newsletter) return res.status(404).json({ message: "Newsletter not found" });
            res.status(200).json({ message: "Newsletter deleted successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new NewsletterController();

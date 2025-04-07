const mongoose = require("mongoose");  
const SiteSettings = require("../models/siteSettingsModel");
const siteSettingsService = require("../services/siteSettingsService");

class SiteSettingsController {
    async getSiteSettings(req, res) {
        try {
            const siteSettings = await siteSettingsService.getSiteSettings();
            res.status(200).json({ data: siteSettings });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async updateSiteSettings(req, res) {
        try {
            const { id } = req.params;
            const { type } = req.query;
    
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ message: "Invalid site settings ID format." });
            }
    
            const validTypes = Object.keys(SiteSettings.schema.obj);
            if (!type || !validTypes.includes(type)) {
                return res.status(400).json({ message: "Invalid settings type"});
            }
    
            const siteSettings = await siteSettingsService.updateSiteSettings(type, id, req.body);
            if (!siteSettings) {
                return res.status(404).json({ message: "Site settings not found. Please check the ID." });
            }
    
            res.status(200).json({ message: "Site settings updated successfully.", data: siteSettings });
        } catch (err) {
            console.error("Error updating site settings:", err);
            res.status(500).json({ message: "An unexpected error occurred. Please try again later." });
        }
    }
    
}

module.exports = new SiteSettingsController();

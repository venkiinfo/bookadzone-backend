const mongoose = require("mongoose");  
const siteSettingsService = require("../services/siteSettingsService");

class SiteSettingsController {
    async getSiteSettings(req, res) {
        try {
            const siteSettings = await siteSettingsService.getSiteSettings();
            res.status(200).json({ data: siteSettings });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    updateSettings = async (req, res, updateFunction, settingType) => {
        try {
            const { id } = req.params;
            
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ error: "Invalid ID format" });
            }

            const updatedSettings = await updateFunction(id, req.body);
            if (!updatedSettings) {
                return res.status(404).json({ message: `${settingType} settings not found` });
            }

            res.status(200).json({ message: `${settingType} settings updated`, data: updatedSettings });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    updateGeneralSettings = (req, res) => this.updateSettings(req, res, siteSettingsService.updateGeneralSettings, "General");
    updateContactSettings = (req, res) => this.updateSettings(req, res, siteSettingsService.updateContactSettings, "Contact");
    updateEmailConfig = (req, res) => this.updateSettings(req, res, siteSettingsService.updateEmailConfig, "Email");
}

module.exports = new SiteSettingsController();

const mongoose = require("mongoose"); 

const SiteSettings = require("../models/siteSettingsModel");

class SiteSettingsRepository {
    async getSiteSettings() {
        return await SiteSettings.findOne();
    }

    async updateGeneralSettings(id,data) {
        return await SiteSettings.findOneAndUpdate({ _id: id }, { generalSettings: data }, { new: true });
    }


    async updateContactSettings(id,data) {
        return await SiteSettings.findOneAndUpdate({ _id: id }, { contactInfo: data }, { new: true });
    }

    async updateEmailConfig(id,data) {
        return await SiteSettings.findOneAndUpdate({ _id: id }, { emailConfig: data }, { new: true });

    }
}

module.exports = new SiteSettingsRepository();

const siteSettingsRepository = require("../repositories/siteSettingsRepository");

class SiteSettingsService {
    async getSiteSettings() {
        return await siteSettingsRepository.getSiteSettings();
    }

    async updateGeneralSettings(id,data) {
        return await siteSettingsRepository.updateGeneralSettings(id,data);
    }

    async updateContactSettings(id,data) {
        return await siteSettingsRepository.updateContactSettings(id,data);
    }

    async updateEmailConfig(id,data) {
        return await siteSettingsRepository.updateEmailConfig(id,data);
    }
}

module.exports = new SiteSettingsService();

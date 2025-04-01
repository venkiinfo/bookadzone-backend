const siteSettingsRepository = require("../repositories/siteSettingsRepository");

class SiteSettingsService {
    async getSiteSettings() {
        return await siteSettingsRepository.getSiteSettings();
    }
    async updateSiteSettings(type,id,data) {
        return await siteSettingsRepository.updateSiteSettings(type,id,data);
    }
}

module.exports = new SiteSettingsService();

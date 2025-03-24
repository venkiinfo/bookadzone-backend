
const SiteSettings = require("../models/siteSettingsModel");

class SiteSettingsRepository {
    async getSiteSettings() {
        return await SiteSettings.findOne();
    }
    async updateSiteSettings(type,id,data) {
        try{
            const result=await SiteSettings.findOneAndUpdate({ _id: id }, { [type]: data }, { new: true });
            return result;
        }catch(err){
            throw err;
        }
    }
}

module.exports = new SiteSettingsRepository();

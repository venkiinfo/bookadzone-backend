const FOOTERINFO = require('../models/footerInfoModel');

class FooterInfoRepository {
    async createFooterInfo(data) {
        return await FOOTERINFO.create(data);
    }

    async getAllFooterInfo() {
        return await FOOTERINFO.find({ isDeleted: false });
    }

    async getFooterInfoById(id) {
        return await FOOTERINFO.findOne({ _id: id, isDeleted: false });
    }
    
    async updateFooterInfo(id, data) {
        return await FOOTERINFO.findByIdAndUpdate(id, data, { new: true });
    }
    
    async softDeleteFooterInfo(id) {
        return await FOOTERINFO.findByIdAndUpdate(id, { isDeleted: true }, { new:true });
    }
}

module.exports = new FooterInfoRepository();
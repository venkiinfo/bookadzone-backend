const footerInfoRepository = require('../repositories/footerInfoRepository');

class footerInfoService {
    async createFooterInfo(data) {
        return await footerInfoRepository.createFooterInfo(data);
    }

    async getAllFooterInfo() {
        return await footerInfoRepository.getAllFooterInfo();
    }

    async getFooterInfoById(id) {
        return await footerInfoRepository.getFooterInfoById(id);
    }

    async updateFooterInfo(id, data) {
        return await footerInfoRepository.updateFooterInfo(id, data);
    }

    async softDeleteInfo(id) {
        return await footerInfoRepository.softDeleteFooterInfo(id);
    }
}

module.exports = new footerInfoService();

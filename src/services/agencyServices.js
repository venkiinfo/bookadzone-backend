const AgencyRepository = require("../repositories/agencyRepository");
class agencyService {
    async createAgency(data) {
        return await AgencyRepository.createAgency(data);
    }
    async getAllAgencys() {
        return await AgencyRepository.getAllAgencys();
    }
    async getAgencyById(id) {
        return await AgencyRepository.getAgencyById(id);
    }
    async updateAgency(id, data) {
        return await AgencyRepository.updateAgency(id, data);
    }
    async softDeleteAgency(id) {
        return await AgencyRepository.softDeleteAgency(id);
    }
}
module.exports = new agencyService();

const Agency = require("../models/agencyModel");

class agencyRepository {
    async createAgency(data) {
        return await Agency.create(data);
    }
    async getAllAgencys() {
        return await Agency.find({ isDeleted: false });
    }

    async getAgencyById(id) {
        return await Agency.findOne({ _id: id, isDeleted: false });
    }

    async updateAgency(id, data) {
        return await Agency.findByIdAndUpdate(id, data, { new: true });
    }
    async softDeleteAgency(id) {
        return await Agency.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
}

module.exports = new agencyRepository();

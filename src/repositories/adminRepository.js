const Admin = require("../models/adminModel");

class adminRepository {
    async createAdmin(data) {
        return await Admin.create(data);
    }

    async getAllAdmins() {
        return await Admin.find({ isDeleted: false });
    }

    async getAdminById(id) {
        return await Admin.findOne({ _id: id, isDeleted: false });
    }

    async updateAdmin(id, data) {
        return await Admin.findByIdAndUpdate(id, data, { new: true });
    }

    async softDeleteAdmin(id) {
        return await Admin.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
}

module.exports = new adminRepository();

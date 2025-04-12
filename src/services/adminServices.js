const AdminRepository = require("../repositories/adminRepository");

class adminService {
    async createAdmin(data) {
        return await AdminRepository.createAdmin(data);
    }

    async getAllAdmins() {
        return await AdminRepository.getAllAdmins();
    }

    async getAdminById(id) {
        return await AdminRepository.getAdminById(id);
    }

    async updateAdmin(id, data) {
        return await AdminRepository.updateAdmin(id, data);
    }

    async softDeleteAdmin(id) {
        return await AdminRepository.softDeleteAdmin(id);
    }
}

module.exports = new adminService();

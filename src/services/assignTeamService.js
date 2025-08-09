const assignTeamRepository = require("../repositories/assignTeamRepository");

class AssignTeamService {
    async createAssignments(data) {
        return await assignTeamRepository.createAssignments(data);
    }

    async getAllAssignments() {
        return await assignTeamRepository.getAllAssignments();
    }

    async getAssignmentById(id) {
        return await assignTeamRepository.getAssignmentById(id);
    }

    async updateAssignment(id, data) {
        return await assignTeamRepository.updateAssignment(id, data);
    }

    async softDeleteAssignment(id) {
        return await assignTeamRepository.softDeleteAssignment(id);
    }

    // async getCampaignDetailsWithEmployee(id) {
    //     return await assignTeamRepository.getCampaignDetailsWithEmployee(id);
    // }
}

module.exports = new AssignTeamService();

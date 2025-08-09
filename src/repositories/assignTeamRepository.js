const AssignTeam = require("../models/assignTeamModel");

class AssignTeamRepository {
    async createAssignments(data) {
        return await AssignTeam.create(data);
    }

    async getAllAssignments() {
        return await AssignTeam.find({ isDeleted: false })
            .populate("employeeName")
            .populate("campaignName");
    }

    async getAssignmentById(id) {
        return await AssignTeam.findOne({ _id: id, isDeleted: false })
            .populate("employeeName")
            .populate("campaignName");
    }

    async updateAssignment(id, data) {
        return await AssignTeam.findByIdAndUpdate(id, data, { new: true });
    }

    async softDeleteAssignment(id) {
        return await AssignTeam.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
}

module.exports = new AssignTeamRepository();

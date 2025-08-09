const assignTeamService = require("../services/assignTeamService");
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require("../utils/httpResponse");

class AssignTeamController {
    async createAssignments(req, res) {
        try {
            const assignment = await assignTeamService.createAssignments(req.body);
            res.status(201).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Campaign assigned successfully",
                data: assignment,
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }

    async getAllAssignments(req, res) {
        try {
            const assignments = await assignTeamService.getAllAssignments();
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                data: assignments,
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }

    async getAssignmentById(req, res) {
        try {
            const assignment = await assignTeamService.getAssignmentById(req.params.id);
            if (!assignment)
                return res.status(404).json({
                    status: HTTP_RESPONSE.FAIL,
                    message: "Assignment not found",
                });
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                data: assignment,
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }

    async updateAssignment(req, res) {
        try {
            const assignment = await assignTeamService.updateAssignment(req.params.id, req.body);
            if (!assignment)
                return res.status(404).json({
                    status: HTTP_RESPONSE.FAIL,
                    message: "Assignment not found",
                });
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Assignment updated",
                data: assignment,
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }

    async softDeleteAssignment(req, res) {
        try {
            const assignment = await assignTeamService.softDeleteAssignment(req.params.id);
            if (!assignment)
                return res.status(404).json({
                    status: HTTP_RESPONSE.FAIL,
                    message: "Assignment not found",
                });
            res.status(200).json({
                status: HTTP_RESPONSE.SUCCESS,
                message: "Assignment deleted successfully",
            });
        } catch (err) {
            res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                status: HTTP_RESPONSE.FAIL,
                error: err.message,
            });
        }
    }
}

module.exports = new AssignTeamController();

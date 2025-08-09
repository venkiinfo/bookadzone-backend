const mongoose = require("mongoose");
const AssignTeam = require("../models/assignTeamModel"); // Make sure the model path is correct

const seedAssignTeams = async () => {
    try {
        await AssignTeam.deleteMany();

        const assignTeams = [
            {
                employeeName: "644abc123def4567890aaa11", // ObjectId of employee (replace with real IDs)
                campaignName: "644def123abc4567890bbb22", // ObjectId of campaign (replace with real IDs)
                status: "active",
                isDeleted: false
            },
            {
                employeeName: "644abc123def4567890aaa12",
                campaignName: "644def123abc4567890bbb23",
                status: "active",
                isDeleted: false
            },
            {
                employeeName: "644abc123def4567890aaa13",
                campaignName: "644def123abc4567890bbb24",
                status: "inactive",
                isDeleted: false
            }
        ];

        await AssignTeam.insertMany(assignTeams);
        console.log("AssignTeam data seeded successfully");
    } catch (error) {
        console.error("Seeding AssignTeam failed:", error);
    }
};

module.exports = seedAssignTeams;

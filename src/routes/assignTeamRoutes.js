const express = require("express");
const router = express.Router();
const assignTeamController = require("../controllers/assignTeamController");

router.post("/", assignTeamController.createAssignments);
router.get("/", assignTeamController.getAllAssignments);
router.get("/:id", assignTeamController.getAssignmentById);
router.post("/:id", assignTeamController.updateAssignment);
router.delete("/:id", assignTeamController.softDeleteAssignment);

module.exports = router;

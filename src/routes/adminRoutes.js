const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
router.post("/", adminController.createAdmin);
router.get("/", adminController.getAllAdmins);
router.get("/:id", adminController.getAdminById);
router.post("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.softDeleteAdmin);

module.exports = router;

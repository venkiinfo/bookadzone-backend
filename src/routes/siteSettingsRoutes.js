const express = require("express");
const router = express.Router();
const siteSettingsController = require("../controllers/siteSettingsController");

router.get("/", siteSettingsController.getSiteSettings);
router.post("/general/:id", siteSettingsController.updateGeneralSettings);
router.post("/contact/:id", siteSettingsController.updateContactSettings);
router.post("/email/:id", siteSettingsController.updateEmailConfig);

module.exports = router;

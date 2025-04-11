const express = require("express");
const router = express.Router();
const siteSettingsController = require("../controllers/siteSettingsController");

router.get("/", siteSettingsController.getSiteSettings);
router.put("/update/:id", siteSettingsController.updateSiteSettings);

module.exports = router;

const express = require("express");
const router = express.Router();
const newsletterController = require("../controllers/newsletterController");

router.post("/", newsletterController.createNewsletter);
router.get("/", newsletterController.getAllNewsletters);
router.get("/:id", newsletterController.getNewsletterById);
router.put("/:id", newsletterController.updateNewsletter);
router.delete("/:id", newsletterController.softDeleteNewsletter);

module.exports = router;

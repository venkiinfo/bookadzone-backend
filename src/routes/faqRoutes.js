const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqController");

router.post("/", faqController.createFaq);
router.get("/", faqController.getAllFaqs);
router.get("/:id", faqController.getFaqById);
router.post("/:id", faqController.updateFaq);
router.delete("/:id", faqController.softDeleteFaq);

module.exports = router;

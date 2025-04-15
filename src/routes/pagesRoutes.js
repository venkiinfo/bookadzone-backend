const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pagesControllers");

router.post("/", pageController.createPage);
router.get("/", pageController.getAllPages);
router.get("/:id", pageController.getPageById);
router.post("/:id", pageController.updatePage);
router.delete("/:id", pageController.softDeletePage);

module.exports = router;

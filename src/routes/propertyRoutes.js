const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");

router.post("/", propertyController.createProperty);
router.get("/", propertyController.getAllProperty);
router.get("/:id", propertyController.getPropertyById);
router.post("/:id", propertyController.updateProperty);
router.delete("/:id", propertyController.softDeleteProperty);

module.exports = router;

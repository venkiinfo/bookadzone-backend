const express = require("express");
const router = express.Router();
const agencyController = require("../controllers/agencyController");
const upload = require("../utils/fileupload");
router.post("/", 
    // upload.fields([
    // { name: "agency_logo", maxCount: 1 },
    // { name: "employee_photo", maxCount: 1 },
    // { name: "employee_id_proof", maxCount: 1 },
    // { name: "business_proof", maxCount: 1 },
// ])
upload
,agencyController.createAgency);
router.get("/", agencyController.getAllAgencys);
router.get("/:id", agencyController.getAgencyById);
router.post("/:id", agencyController.updateAgency);
router.delete("/:id", agencyController.softDeleteAgency);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const agencyController = require("../controllers/agencyController");
// const upload = require("../middleware/upload/img"); // Ensure this is the correct path to your upload middleware

// // Use upload.fields() for multiple file uploads with different field names
// router.post(
//     "/",
//     upload.single("agency_logo"),
//     agencyController.createAgency
// );

// router.get("/", agencyController.getAllAgencys);
// router.get("/:id", agencyController.getAgencyById);
// router.post("/:id", agencyController.updateAgency);
// router.delete("/:id", agencyController.softDeleteAgency);

// module.exports = router;
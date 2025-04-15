const express = require("express");
const router = express.Router();
const authenticationController = require("../controllers/authenticationController");

router.post("/login", authenticationController.authLogin);
router.post("/forgotpassword",authenticationController.authForgetPassword);
router.post("/resetpassword",authenticationController.authResetPassword)

module.exports = router;

const express = require("express");
const router = express.Router();
const authenticationController = require("../controllers/authenticationController");

router.post("/login", authenticationController.authLogin);

module.exports = router;

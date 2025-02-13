const express = require("express");
const router = express.Router();
const admissionController = require("../controllers/admissionController");

router.post("/admissions", admissionController.submitApplication);

module.exports = router;

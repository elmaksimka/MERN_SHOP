const express = require("express");
const router = express.Router();
const { getSubEmails, postSubEmails } = require("../contollers/subEmailController.js");

router.get("/", getSubEmails);
router.post("/", postSubEmails);

module.exports = router;

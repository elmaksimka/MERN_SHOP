const express = require("express");
const router = express.Router();
const { getInstagramImages } = require("../contollers/instagramImageController.js");

router.get("/", getInstagramImages);

module.exports = router;

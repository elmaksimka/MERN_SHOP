const express = require("express");
const router = express.Router();
const { getTrendingNow, getTrendingNowById } = require("../contollers/trendingNowController.js");

router.get("/", getTrendingNow);
router.get("/:id", getTrendingNowById);

module.exports = router;

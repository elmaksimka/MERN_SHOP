const express = require("express");
const router = express.Router();
const {
  getPopularCategories,
} = require("../contollers/popularCategoryController.js");

router.get("/", getPopularCategories);

module.exports = router;

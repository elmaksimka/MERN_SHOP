const express = require("express");
const router = express.Router();
const { getFashionBlogs } = require("../contollers/fashionBlogController.js");

router.get("/", getFashionBlogs);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getSubEmailsWithCats, postSubEmailsWithCats  } = require("../contollers/subEmailWithCatController.js");

router.get("/", getSubEmailsWithCats);
router.post("/", postSubEmailsWithCats);

module.exports = router;

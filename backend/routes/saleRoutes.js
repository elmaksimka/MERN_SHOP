const express = require("express");
const router = express.Router();
const { getSales, getSaleById } = require("../contollers/saleController.js");

router.get("/", getSales);
router.get("/:id", getSaleById);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getNewArrivals,
  getNewArrivalById,
} = require("../contollers/newArrivalController.js");

router.get('/', getNewArrivals);
router.get('/:id', getNewArrivalById);

module.exports = router;

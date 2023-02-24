const mongoose = require("mongoose");

const SubEmailWithCatSchema = mongoose.Schema({
  email: {
    type: String,
  },
  checkbox: {
    type: String,
  },
  categories: {
    type: Array,
  },
});

const SubEmailWithCat = mongoose.model(
  "SubEmailWithCat",
  SubEmailWithCatSchema
);

module.exports = SubEmailWithCat;

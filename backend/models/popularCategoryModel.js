const mongoose = require("mongoose");

const popularCategorySchema = mongoose.Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
});

const PopularCategory = mongoose.model(
  "PopularCategory",
  popularCategorySchema
);

module.exports = PopularCategory;

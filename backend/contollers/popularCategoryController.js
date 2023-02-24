const PopularCategory = require("../models/popularCategoryModel");

const getPopularCategories = (req, res) => {
  PopularCategory.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

module.exports = {
  getPopularCategories,
};

const Category = require("../models/categoryModel");

const getCategories = (req, res) => {
  Category.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

module.exports = {
  getCategories,
};

const FashionBlog = require("../models/fashionBlogModel");

const getFashionBlogs = (req, res) => {
  FashionBlog.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

module.exports = {
  getFashionBlogs,
};

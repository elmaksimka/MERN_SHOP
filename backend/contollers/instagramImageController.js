const InstagramImage = require("../models/instagramImageModel");

const getInstagramImages = (req, res) => {
  InstagramImage.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

module.exports = {
  getInstagramImages,
};

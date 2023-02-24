const mongoose = require("mongoose");

const instagramImageSchema = mongoose.Schema({
  url: {
    type: String,
  },
});

const InstagramImage = mongoose.model("InstagramImage", instagramImageSchema);

module.exports = InstagramImage;

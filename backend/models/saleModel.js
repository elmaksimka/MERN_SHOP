const mongoose = require("mongoose");

const saleSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    discount: {
      type: String,
    },
    price: {
      type: String,
    },
    oldprice: {
      type: String,
    },
    stars: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;

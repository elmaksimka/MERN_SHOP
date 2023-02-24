const mongoose = require("mongoose");

const trendingNowSchema = mongoose.Schema(
  {
    url: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const TrendingNow = mongoose.model("TrendingNow", trendingNowSchema);

module.exports = TrendingNow;

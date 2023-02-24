const TrendingNow = require("../models/trendingNowModel");

const getTrendingNow = (req, res) => {
    TrendingNow.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const getTrendingNowById = (req, res) => {
  const TrendingNowId = req.params.id;

  TrendingNow.findById(TrendingNowId)
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

module.exports = {
  getTrendingNow,
  getTrendingNowById,
};

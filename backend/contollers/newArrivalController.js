const NewArrival = require("../models/newArrivalModel");

const getNewArrivals = (req, res) => {
  NewArrival.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const getNewArrivalById = (req, res) => {
  const newArrivalId = req.params.id;

  NewArrival.findById(newArrivalId)
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

module.exports = {
  getNewArrivals,
  getNewArrivalById,
};

const Sale = require("../models/saleModel");

const getSales = (req, res) => {
  Sale.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const getSaleById = (req, res) => {
  const saleId = req.params.id;

  Sale.findById(saleId)
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

module.exports = {
  getSales,
  getSaleById,
};

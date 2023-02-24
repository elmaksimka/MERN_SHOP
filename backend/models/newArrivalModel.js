const mongoose = require("mongoose");

const newArrivalSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    url: {
      type: String,
    },
    stars: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const NewArrival = mongoose.model("NewArrival", newArrivalSchema);

module.exports = NewArrival;

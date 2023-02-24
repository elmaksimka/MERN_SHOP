const mongoose = require("mongoose");

const SubEmailSchema = mongoose.Schema({
  email: {
    type: String,
  },
});

const SubEmail = mongoose.model("SubEmail", SubEmailSchema);

module.exports = SubEmail;

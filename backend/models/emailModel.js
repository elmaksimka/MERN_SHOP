const mongoose = require('mongoose')

const emailSchema = mongoose.Schema(
  {
    email: {
      type: String,
    }
  }
)

const Email = mongoose.model('Email', emailSchema)

module.exports = Email
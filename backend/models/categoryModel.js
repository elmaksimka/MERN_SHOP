const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
  }
)

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
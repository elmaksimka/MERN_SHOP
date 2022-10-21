const mongoose = require('mongoose')

const fashionBlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
    category: {
        type: String,
    },
    date: {
        type: String,
    },
    comments: {
        type: String,
    },
    text: {
        type: String,
    },
  }
)

const FashionBlog = mongoose.model('FashionBlog', fashionBlogSchema)

module.exports = FashionBlog
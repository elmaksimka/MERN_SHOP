// const asyncHandler = require('express-async-handler')

// const Category = require('../models/categoryModel')

// // @desc    Get categories
// // @route   GET /api/categories
// // @access  Private
// const getCategories = asyncHandler(async (req, res) => {
//   const categories = await Categories.find({ user: req.user.id })

//   res.status(200).json(categories)
// })

// // @desc    Set categories
// // @route   POST /api/categories
// // @access  Private
// const setCategory = asyncHandler(async (req, res) => {
//   if (!req.body.text) {
//     res.status(400)
//     throw new Error('Please add a text field')
//   }

//   const category = await Category.create({
//     text: req.body.text,
//     user: req.user.id,
//   })

//   res.status(200).json(category)
// })

// // @desc    Update categories
// // @route   PUT /api/categories/:id
// // @access  Private
// const updateCategory = asyncHandler(async (req, res) => {
//   const category = await Category.findById(req.params.id)

//   if (!category) {
//     res.status(400)
//     throw new Error('Category not found')
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401)
//     throw new Error('User not found')
//   }

//   // Make sure the logged in user matches the categories user
//   if (category.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//   const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   })

//   res.status(200).json(updatedCategory)
// })

// // @desc    Delete categories
// // @route   DELETE /api/categories/:id
// // @access  Private
// const deleteCategory = asyncHandler(async (req, res) => {
//   const category = await Category.findById(req.params.id)

//   if (!category) {
//     res.status(400)
//     throw new Error('Category not found')
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401)
//     throw new Error('User not found')
//   }

//   // Make sure the logged in user matches the categories user
//   if (category.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//   await category.remove()

//   res.status(200).json({ id: req.params.id })
// })

// module.exports = {
//   getCategories,
//   setCategory,
//   updateCategory,
//   deleteCategory,
// }

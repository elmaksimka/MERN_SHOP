const asyncHandler = require('express-async-handler')

const Order = require('../models/orderModel')
const User = require('../models/userModel')

// @desc    Get orders
// @route   GET /api/orders
// @access  Private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user.id })

  res.status(200).json(orders)
})

// @desc    Set order
// @route   POST /api/orders
// @access  Private
const setOrder = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const order = await Order.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(order)
})

// @desc    Update order
// @route   PUT /api/orders/:id
// @access  Private
const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (!order) {
    res.status(400)
    throw new Error('Order not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the order user
  if (order.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedOrder)
})

// @desc    Delete order
// @route   DELETE /api/orders/:id
// @access  Private
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (!order) {
    res.status(400)
    throw new Error('Order not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the order user
  if (order.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await order.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getOrders,
  setOrder,
  updateOrder,
  deleteOrder,
}

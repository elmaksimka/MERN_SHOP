// const asyncHandler = require('express-async-handler')
// const Email = require('../models/emailModel')

// const registerEmail = asyncHandler(async (req, res) => {
//   const { email } = req.body

//   if (!email) {
//     res.status(400)
//     throw new Error('Please add all fields')
//   }

//   const emailExists = await Email.findOne({ email })

//   if (emailExists) {
//     res.status(400)
//     throw new Error('Email already exists')
//   }

//   const newemail = await Email.create({
//     email,
//   })
// })

// module.exports = {
//   registerEmail
// }

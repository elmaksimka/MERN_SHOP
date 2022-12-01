const express = require('express')
const router = express.Router()
const { registerEmail } = require('../contollers/emailController')

router.post('/', registerEmail)

module.exports = router
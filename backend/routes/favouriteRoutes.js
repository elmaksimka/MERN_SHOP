const express = require('express')
const router = express.Router()
const {
  getFavourites,
  updateFavourite
} = require('../contollers/favouriteController')

// const { protect } = require('../middleware/authMiddleware')

// router.route('/').get(protect, getFavourites).post(protect, setFavourite)
// router.route('/:id').delete(protect, deleteFavourite).put(protect, updateFavourite)

router.route('/').get(getFavourites)
router.route('/:id').put(updateFavourite)

module.exports = router

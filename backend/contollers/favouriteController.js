// const asyncHandler = require("express-async-handler");

// const Favourite = require("../models/favouriteModel");

// // @desc    Get favourites
// // @route   GET /api/favourites
// // @access  Private
// const getFavourites = asyncHandler(async (req, res) => {
//   const favourites = await Favourite.find({ user: req.user.id });

//   res.status(200).json(favourites);
// });

// // @desc    Set favourite
// // @route   POST /api/favourites
// // @access  Private
// const setFavourite = asyncHandler(async (req, res) => {
//   const favourite = await Favourite.create({
//     favourites: req.body.favourites,
//     user: req.user.id,
//   });

//   res.status(200).json(favourite);
// });

// // @desc    Update favourite
// // @route   PUT /api/favourites/:id
// // @access  Private
// const updateFavourite = asyncHandler(async (req, res) => {
//   const favourite = await Favourite.findById(req.params.id);

//   if (!favourite) {
//     res.status(400);
//     throw new Error("Favourite not found");
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   // Make sure the logged in user matches the favourite user
//   if (favourite.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("User not authorized");
//   }

//   const updatedFavourite = await Favourite.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {
//       new: true,
//     }
//   );

//   res.status(200).json(updatedFavourite);
// });

// // @desc    Delete favourite
// // @route   DELETE /api/favourites/:id
// // @access  Private
// const deleteFavourite = asyncHandler(async (req, res) => {
//   const favourite = await Favourite.findById(req.params.id);

//   if (!favourite) {
//     res.status(400);
//     throw new Error("Favourite not found");
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   // Make sure the logged in user matches the favourite user
//   if (favourite.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("User not authorized");
//   }

//   await favourite.remove();

//   res.status(200).json({ id: req.params.id });
// });

// module.exports = {
//   getFavourites,
//   setFavourite,
//   updateFavourite,
//   deleteFavourite,
// };

const asyncHandler = require("express-async-handler");

const Favourite = require("../models/favouriteModel");

const getFavourites = (req, res) => {
  Favourite.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const updateFavourite = asyncHandler(async (req, res) => {
  const favourite = await Favourite.findById(req.params.id);

  if (!favourite) {
    res.status(400);
    throw new Error("Favourite not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (favourite.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedFavourite = await Favourite.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedFavourite);
});

module.exports = {
  getFavourites,
  updateFavourite,
};

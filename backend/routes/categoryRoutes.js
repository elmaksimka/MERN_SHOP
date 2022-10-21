const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');

// router.route('/categories').get((req, res) => {
//   Category.find().then(foundCategories => res.json(foundCategories))
// })

// router.get('/', async (req, res, next) => {
//     // sort from the latest to the earliest
//     const categories = await Category.find().sort({ createdAt: 'desc' });
//     return res.status(200).json({
//       statusCode: 200,
//       message: 'Fetched all categories',
//       data: { categories },
//     });
// });

// router.get('/:id', async (req, res, next) => {
//   // req.params contains the route parameters and the id is one of them
//    const category = await Category.findById(req.params.id);
//    return res.status(200).json({
//      statusCode: 200,
//      message: 'Fetched category',
//      data: {
//        category: category || {},
//      },
//    });
//  });

//  router.post('/', async (req, res, next) => {
//   const { img, name } = req.body;

//   // Create a new category
//   const category = new Category({
//     img,
//     name
//   });

//   // Save the category into the DB
//   await category.save();
//   return res.status(201).json({
//     statusCode: 201,
//     message: 'Created category',
//     data: { category },
//   });
// });

// router.put('/:id', async (req, res, next) => {
//   const { img, name } = req.body;

//   // findByIdAndUpdate accepts the category id as the first parameter and the new values as the second parameter
//   const category = await Category.findByIdAndUpdate(
//     req.params.id,
//     { img, name },
//   );
  
//   return res.status(200).json({
//     statusCode: 200,
//     message: 'Updated category',
//     data: { category },
//   });
// });

// router.delete('/:id', async (req, res, next) => {
//   // Mongo stores the id as `_id` by default
//   const result = await Category.deleteOne({ _id: req.params.id });
//   return res.status(200).json({
//     statusCode: 200,
//     message: `Deleted ${result.deletedCount} post(s)`,
//     data: {},
//   });
// });

module.exports = router;
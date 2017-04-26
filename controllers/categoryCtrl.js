'use strict';

const { bookshelf } = require('../db/database');
const Category = require('../models/categoryModel');


module.exports.getCategories = (req, res, next) => {
  console.log("getCategories function called in category controller")
  Category.getAll()
  .then( (categories) => {
    res.status(200).json(categories)
  })
  .catch( (error) => {
    next(error)
  })
}


module.exports.getCategory = ({params: {id}}, res, next) => {
  console.log("getCategories function called in category controller")
  console.log("id", id)
  Category.getSingleCategory(id)
  .then( (category) => {
    res.status(200).json(category)
  })
  .catch( (error) => {
    next(error)
  })
}


module.exports.addCategory = ({body}, res, next) => {
  Category.forge(body)
  .save()
  .then( () => {
    res.status(201).json({"msg": 'Category successfully added.'})
  })
  .catch( (err) => {
    next(err)
  })
}

// Delete removed in order to preven the deletion of animals in addition to categories

// module.exports.deleteCategory = ({params: {id}}, res, next) => {
//   Category.forge({id})
//   .destroy()
//   .then( (category) => {
//     res.status(202).json(category)
//   })
//   .catch( (err) => {
//     next(err)
//   })
// };

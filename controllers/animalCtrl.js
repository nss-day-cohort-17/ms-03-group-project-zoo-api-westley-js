'use strict';

const { bookshelf } = require('../db/database');
const Animal = require('../models/animalModel.js');


module.exports.getAnimals = (req, res, next) => {
  Animal.getAll()
  .then( (animals) => {
    res.status(200).json(animals);
  })
  .catch( (err) => {
    next(err);
  })
};

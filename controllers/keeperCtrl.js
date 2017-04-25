'use strict';

console.log('keeperCtrl loaded')

const { bookshelf } = require('../db/database');
const Keeper = require('../models/keeperModel');

module.exports.getKeepers = (req, res, next) => {
  console.log('getKeepers function called in keeperCtrl')
  Keeper.getAll()
  .then( (keepers) => {
    res.status(200).json(keepers);
  })
  .catch( (error) => {
    next(error);
  })
};

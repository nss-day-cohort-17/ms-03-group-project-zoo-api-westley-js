'use strict'

const {bookshelf} = require('../db/database')
const Trainer = require('../models/trainerModel');

module.exports.getTrainers = (req, res, next) => {
  Trainer.getAll()
  .then((trainers) => {
    res.status(200).json(trainers)
  })
  .catch((error) => {
    next(error)
  })
};

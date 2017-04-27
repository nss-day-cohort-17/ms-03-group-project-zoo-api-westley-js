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

module.exports.getTrainer = ({params: {id}}, res, next) => {
  Trainer.getSingleTrainer(id)
  .then((trainer) => {
    res.status(200).json(trainer)
  })
  .catch((error) => {
    next(error)
  })
}

module.exports.addTrainer = ({body}, res, next ) => {
  Trainer.forge(body)
  .save()
  .then( () => res.status(201).json("msg: New trainer successfully added"))
  .catch( (error) => {
    next(error);
  })
};

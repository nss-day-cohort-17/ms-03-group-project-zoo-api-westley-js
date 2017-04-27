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

module.exports.deleteTrainer = ({params: {id}}, res, next) => {
  Trainer.forge({id})
  .destroy()
  .then( (trainer) => {
    res.status(202).json(trainer);
  })
  .catch( (error) => {
    next(error);
  })
};

module.exports.updateTrainer = ({params, body}, res, next) => {
  Trainer.forge({id: params.id})
  .save(body, {patch: true})
  .then( () => res.status(200).json("msg: Trainer has been updated"))
  .catch( (error) => {
    next(error);
  })
};

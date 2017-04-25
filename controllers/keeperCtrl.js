'use strict';

// console.log('keeperCtrl loaded')

const { bookshelf } = require('../db/database');
const Keeper = require('../models/keeperModel');

module.exports.getKeepers = (req, res, next) => {
  // console.log('getKeepers function called in keeperCtrl')
  Keeper.getAll()
  .then( (keepers) => {
    res.status(200).json(keepers);
  })
  .catch( (error) => {
    next(error);
  })
};


module.exports.getKeeper = ({params: {id}}, res, next) => {
  Keeper.getSingleKeeper(id)
  .then( (keeper) => {
    res.status(200).json(keeper);
  })
  .catch( (error) => {
    next(error);
  })
};


module.exports.addKeeper = ({body}, res, next) => {
  Keeper.forge(body)
  .save()
  .then( () => res.status(201).json("msg: New keeper successfully added"))
  .catch( (error) => {
    next(error);
  })
};

// Must delete from animal-keeper pivot table first for a succesful delete

module.exports.deleteKeeper = ({params: {id}}, res, next) => {
  console.log("deleteKeeper function ran. id: ", id)
  Keeper.forge({id})
  .destroy()
  .then( (keeper) => {
    res.status(202).json(keeper);
  })
  .catch( (error) => {
    next(error);
  });
};


module.exports.updateKeeper = ({params, body}, res, next) => {
  Keeper.forge({id: params.id})
  .save(body, {patch: true})
  .then( () => res.status(200).json("msg: Keeper has been updated"))
  .catch( (error) => {
    next(error);
  })
};

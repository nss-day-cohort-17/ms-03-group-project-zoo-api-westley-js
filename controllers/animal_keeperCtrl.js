'use strict';

const { bookshelf } = require('../db/database');
const Animal_Keeper = require('../models/animal_keeperModel');

module.exports.getAnimal_Keepers = (req, res, next) => {
  Animal_Keeper.getAll()
  .then( (ak) => {
    res.status(200).json(ak);
  })
  .catch( (err) => {
    next(err)
  })
};

module.exports.getAnimal_Keeper = ({params: {id}}, res, next) => {
  Animal_Keeper.getOne(id)
  .then( (ak) => {
    res.status(200).json(ak)
  })
  .catch( (err) => {
    next(err)
  })
};

module.exports.addAnimal_Keeper = ({body}, res, next) => {
  Animal_Keeper.forge(body)
  .save()
  .then( () => {
    res.status(201).json({"msg": 'Animal_Keeper successfully added'})
  })
  .catch( (err) => {
    next(err)
  })
};

module.exports.deleteAnimal_Keeper = ({params: {id}}, res, next) => {
  Animal_Keeper.forge({id})
  .destroy()
  .then( (ak) => {
    res.status(202).json(ak)
  })
  .catch( (err) => {
    next(err)
  })
};

module.exports.updateAnimal_Keeper = ({params, body}, res, next) => {
  Animal_Keeper.forge({id: params.id})
  .save(body, {patch: true})
  .then( () => {
    res.status(200).json({"msg": 'Animal_Keeper has been updated'})
  })
  .catch( (err) => {
    next(err)
  })
};

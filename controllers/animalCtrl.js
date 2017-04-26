'use strict';

const { bookshelf } = require('../db/database');
const Animal = require('../models/animalModel');
const Animal_Keeper = require('../models/animal_keeperModel');


module.exports.getAnimals = (req, res, next) => {
  Animal.getAll()
  .then( (animals) => {
    res.status(200).json(animals);
  })
  .catch( (err) => {
    next(err);
  })
};

module.exports.getAnimal = ({params: {id}}, res, next) => {
  Animal.getOneAnimal(id)
  .then( (animal) => {
    res.status(200).json(animal)
  })
  .catch( (err) => {
    next(err)
  })
}

module.exports.addAnimal = ({body}, res, next) => {
  Animal.forge(body)
  .save()
  .then( () => {
    res.status(201).json({"msg": 'Animal successfully added.'})
  })
  .catch( (err) => {
    next(err)
  })
}

module.exports.deleteAnimal = ({params: {id}}, res, next) => {
  Animal.forge({id})
  .destroy()
  .then( (animal) => {
    res.status(202).json(animal)
  })
  .catch( (err) => {
    next(err)
  })
};

module.exports.updateAnimals = ({params, body}, res, next) => {
  Animal.forge({id: params.id})
  .save(body, {patch: true})
  .then( () => {
    res.status(200).json({"msg": 'Animal has been updated'})
  })
  .catch( (err) => {
    next(err);
  })
};

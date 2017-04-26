'use strict';

const { bookshelf } = require('../db/database');
const Animal_Keeper = require('../models/animal_keeperModel');
const Keeper = require('../models/keeperModel');
const Animal = require('../models/animalModel');

module.exports.getAnimal_Keepers = (req, res, next) => {
  Animal_Keeper.getAll()
  .then( (ak) => {
    res.status(200).json(ak);
  })
  .catch( (err) => {
    next(err)
  })
};

module.exports.getKeeperForAnimal = ({params: {id}}, res, next) => {
  Animal_Keeper.getKeeper(id)
  .then( (ak) => {
    console.log('ak.')
    return ak.toJSON().keeper_id
  })
  .then( (keeper) => {
    Keeper.getSingleKeeper(keeper)
    .then( (data) => {
      res.status(200).json(data)
    })
  })
  .catch( (err) => {
    next(err)
  })
};

module.exports.getAnimalsForKeeper = ({params: {id}}, res, next) => {
  let animalArr = []
  Animal_Keeper.getAnimal(id)
  .then( (ak) => {
    // console.log("ak", ak.toJSON())
    return ak.toJSON()
    // res.status(200).json(ak)
  })
  .then( (animals) => {
    // console.log('animals', animals)
    animals.map( (x) => {
      // console.log('x', x.animal_id)
      // console.log(animalArr)
      Animal.getOneAnimal(x.animal_id)
      .then((data) => {
        return data.toJSON()
      })
      .then( (dataFormatted) => {
        animalArr.push(dataFormatted)
        // console.log(animalArr)
      })
    })
  })
  .then( () => {
    console.log(animalArr)
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

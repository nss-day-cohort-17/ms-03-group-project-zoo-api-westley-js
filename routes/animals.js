'use strict';

const { Router } = require('express');
const router = Router();
const { getAnimals, getAnimal, addAnimal, deleteAnimal, updateAnimals } = require('../controllers/animalCtrl');
const { getKeeperForAnimal } = require('../controllers/animal_keeperCtrl');

router.get('/animals', getAnimals);
router.get('/animals/keepers/:id', getKeeperForAnimal)
router.get('/animals/:id', getAnimal);
router.post('/animals/new', addAnimal);
router.delete('/animals/:id', deleteAnimal);
router.put('/animals/:id', updateAnimals);


module.exports = router;

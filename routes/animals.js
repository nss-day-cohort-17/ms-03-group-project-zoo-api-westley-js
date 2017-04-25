'use strict';

const { Router } = require('express');
const router = Router();
const { getAnimals, getAnimal, addAnimal, deleteAnimal } = require('../controllers/animalCtrl');


router.get('/animals', getAnimals);
router.get('/animals/:id', getAnimal);
router.post('/animals/new', addAnimal);
router.delete('/animals/:id', deleteAnimal);

module.exports = router;

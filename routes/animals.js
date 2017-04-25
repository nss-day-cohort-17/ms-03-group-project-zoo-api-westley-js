'use strict';

const { Router } = require('express');
const router = Router();
const { getAnimals, getAnimal, addAnimal } = require('../controllers/animalCtrl');


router.get('/animals', getAnimals);
router.get('/animals/:id', getAnimal);
router.post('/animals/new', addAnimal);


module.exports = router;

'use strict';

const { Router } = require('express');
const router = Router();
const { getAnimals, getAnimal } = require('../controllers/animalCtrl');


router.get('/animals', getAnimals);
router.get('/animals/:id', getAnimal);


module.exports = router;

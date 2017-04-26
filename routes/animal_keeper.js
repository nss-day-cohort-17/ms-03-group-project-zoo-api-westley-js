'use strict';

const { Router } = require('express');
const router = Router();
const { getAnimal_Keepers, getAnimal_Keeper, addAnimal_Keeper, deleteAnimal_Keeper, updateAnimal_Keeper } = require('../controllers/animal_keeperCtrl');

router.get('/animal_keeper', getAnimal_Keepers);
router.get('/animal_keeper/:id', getAnimal_Keeper);
router.post('/animal_keeper/new', addAnimal_Keeper);
router.delete('/animal_keeper/:id', deleteAnimal_Keeper);
router.put('/animal_keeper/:id', updateAnimal_Keeper);

module.exports = router;

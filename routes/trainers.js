'use strict'

const {Router} = require('express');
const router = Router();

const { getTrainers, getTrainer, addTrainer, deleteTrainer } = require('../controllers/trainerCtrl.js')


router.get('/trainers', getTrainers);
router.post('/trainers/new', addTrainer);
router.get('/trainers/:id', getTrainer);
router.delete('/trainers/:id', deleteTrainer);

module.exports = router;

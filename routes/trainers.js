'use strict'

const {Router} = require('express');
const router = Router();

const { getTrainers, getTrainer, addTrainer, deleteTrainer, updateTrainer } = require('../controllers/trainerCtrl.js')


router.get('/trainers', getTrainers);
router.post('/trainers/new', addTrainer);
router.get('/trainers/:id', getTrainer);
router.delete('/trainers/:id', deleteTrainer);
router.put('/trainers/:id', updateTrainer);

module.exports = router;

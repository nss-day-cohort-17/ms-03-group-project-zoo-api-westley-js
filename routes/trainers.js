'use strict'

const {Router} = require('express');
const router = Router();

const { getTrainers, getTrainer, addTrainer } = require('../controllers/trainerCtrl.js')


router.get('/trainers', getTrainers);
router.post('/trainers/new', addTrainer);
router.get('/trainers/:id', getTrainer);

module.exports = router;

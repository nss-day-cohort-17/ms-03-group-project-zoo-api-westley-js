'use strict'

const {Router} = require('express');
const router = Router();

const { getTrainers, getTrainer } = require('../controllers/trainerCtrl.js')


router.get('/trainers', getTrainers);
router.get('/trainers/:id', getTrainer);

module.exports = router;

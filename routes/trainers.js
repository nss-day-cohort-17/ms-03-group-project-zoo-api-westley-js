'use strict'

const {Router} = require('express');
const router = Router();

const { getTrainers } = require('../controllers/trainerCtrl.js')


router.get('/trainers', getTrainers);

module.exports = router;

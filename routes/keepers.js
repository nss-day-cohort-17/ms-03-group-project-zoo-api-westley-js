'use strict';

console.log('keepers route loaded')

const { Router } = require('express');
const router = Router();

const { getKeepers } = require('../controllers/keeperCtrl')

router.get('/keepers', getKeepers);

module.exports = router

'use strict';

console.log('keepers route loaded')

const { Router } = require('express');
const router = Router();

const { getKeepers, getKeeper } = require('../controllers/keeperCtrl')

router.get('/keepers', getKeepers);
router.get('/keepers/:id', getKeeper);

module.exports = router

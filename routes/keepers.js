'use strict';

console.log('keepers route loaded')

const { Router } = require('express');
const router = Router();

const { getKeepers, getKeeper, addKeeper } = require('../controllers/keeperCtrl')

router.get('/keepers', getKeepers);
router.get('/keepers/:id', getKeeper);
router.post('/keepers/new', addKeeper);

module.exports = router

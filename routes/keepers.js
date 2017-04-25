'use strict';

console.log('keepers route loaded')

const { Router } = require('express');
const router = Router();

const { getKeepers, getKeeper, addKeeper, deleteKeeper } = require('../controllers/keeperCtrl')

router.get('/keepers', getKeepers);
router.get('/keepers/:id', getKeeper);
router.post('/keepers/new', addKeeper);
router.delete('/keepers/:id', deleteKeeper)

module.exports = router

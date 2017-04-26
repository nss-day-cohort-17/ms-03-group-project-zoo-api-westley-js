'use strict';

const { Router } = require('express');
const router = Router();

const { getKeepers, getKeeper, addKeeper, deleteKeeper, updateKeeper } = require('../controllers/keeperCtrl')

router.get('/keepers', getKeepers);
router.get('/keepers/:id', getKeeper);
router.post('/keepers/new', addKeeper);
router.delete('/keepers/:id', deleteKeeper)
router.put('/keepers/:id', updateKeeper)

module.exports = router

'use strict';

const { Router } = require('express');
const router = Router();
const { getCategories, getCategory, addCategory, deleteCategory } = require('../controllers/categoryCtrl');


router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);
router.post('/categories/new', addCategory);
// router.delete('/categories/:id', deleteCategory);  // See categoryCtrl for explanation

module.exports = router;

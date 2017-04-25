'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./animals'));

module.exports = router;

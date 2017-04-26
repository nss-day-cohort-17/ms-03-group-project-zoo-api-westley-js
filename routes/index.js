'use strict';

const { Router } = require('express');
const router = Router();


router.use(require('./keepers'));
router.use(require('./animals'));
router.use(require('./categories'));

router.get('/', function (req, res) {
  res.json({
    "keepers": "root/api/v1/keepers"
  });
});


module.exports = router;

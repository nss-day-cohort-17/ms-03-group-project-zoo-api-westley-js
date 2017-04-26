'use strict';

const { Router } = require('express');
const router = Router();


router.use(require('./keepers'));
router.use(require('./animals'));
router.use(require('./animal_keeper'))

router.get('/', function (req, res) {
  res.json({
    "keepers": "root/api/v1/keepers",
    "animals": "root/api/v1/animals",
    "animal_keeper": "root/api/v1/animal_keeper"
  });
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* Controllers */

const publicController = require('../controllers/publicController')

/* GET */

router.get('/categorys',publicController.Categorys);


module.exports = router;

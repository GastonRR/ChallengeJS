var express = require('express');
var router = express.Router();



/* GET */

router.get('/operations/:op?')
router.get('/operations/detail/:id')


/* POST */

router.post('/new/:op');


/* UPDATE*/

router.put('/operations/edit/:id')


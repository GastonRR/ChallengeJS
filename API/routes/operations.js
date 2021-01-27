var express = require('express');
var router = express.Router();

const operationsController = require('../controllers/operationsController');

const auth = require('../middlewares/auth');

/* GET */

router.get('/:op?',auth, operationsController.getOperations)
router.get('/detail/:id',auth,operationsController.getDetailOperation)


/* POST */

router.post('/new/:type',auth,operationsController.newOperation);


/* UPDATE*/

router.put('/edit/:id',auth,operationsController.editOperation )

module.exports = router;
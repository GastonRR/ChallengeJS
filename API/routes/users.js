var express = require('express');
var router = express.Router();

/* Controllers */
const UserController = require('../controllers/usersController')
/* POST */

router.post('/SignIn', UserController.SignIn);
router.post('/LogIn', UserController.LogIn );


module.exports = router;

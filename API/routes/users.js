var express = require('express');
var router = express.Router();

const UserController = require('../controllers/usersController')

/* POST */

router.post('/SignIn', UserController.SignIn);
router.post('/LogIn', UserController.LogIn );


module.exports = router;


// async function(req, res) {
//   let user = await User.findOne({
//     include: [
//       {
//           association: "Account",
//           include: [{
//             association: 'Operations'
//           }]
//       }
//   ],
//     where:{id: 1}
//   });
//   res.json(user);
// }
var express = require('express');
var router = express.Router();
/* Authentication*/
const auth = require('../middlewares/auth')
/* controller */
const accountController = require('../controllers/accountController')

/* GET */

router.get('/balance',auth,accountController.getBalance) // get info account 

/* POST */
router.post('/new/balance',auth,accountController.newBalance); // set balance for de account

// /* UPDATE*/

router.put('/update/balance', auth, accountController.updateBalance); //actualiza el saldo de la cuenta 



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
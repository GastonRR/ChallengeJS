var express = require('express');
var router = express.Router();



/* GET */

router.get('/balance')

/* POST */
router.post('/new/balance');

/* UPDATE*/

router.put('/update/balance')



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
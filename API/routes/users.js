var express = require('express');
var router = express.Router();


var { User } = require('../database/models')

/* GET users listing. */
router.get('/', async function(req, res) {
  let user = await User.findOne({
    include: [
      {
          association: "Account",
          include: [{
            association: 'Operations'
          }]
      }
  ],
    where:{id: 1}
  });
  res.json(user);
});

module.exports = router;

var express = require('express');
var router = express.Router();

const userService = require('../services/user.service');
const user = new userService();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await user.find();
  res.send(users);
});

router.post('/', async function (req, res, next) {
  const users = await user.create(req.body);
  res.send(users);
});

module.exports = router;

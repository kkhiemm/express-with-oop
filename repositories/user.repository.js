const Repository = require('./repository');
const User = require('../models/user.model');

module.exports = new (class extends Repository {})(User);

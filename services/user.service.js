const Service = require('./service');
const repository = require('../repositories/user.repository');

module.exports = class extends Service {
  constructor() {
    super();
    this.repository = repository;
  }
};

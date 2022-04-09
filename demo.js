const userService = require('./services/user.service');

const user = new userService();
console.log(user.find());

// const userRepository = require('./repositories/user.repository');

// console.log(userRepository.find());

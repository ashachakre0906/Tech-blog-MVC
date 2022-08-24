const { User } = require('../models')
const userData = [
    {
      username: 'black',
      password: 'password',
    },
    {
      username: 'flower',
      password: 'password',
    },
    {
      username: 'butterfly',
      password: 'password',
    },
  ];
  
const seedUsers = () => User.bulkCreate(userData, {
      individualHooks:  true,
      returning: true,

});
  module.exports = seedUsers;
  
const { User } = require('../models')
const userData = [
    {
      username: 'blackgin',
      password: 'password',
    },
    {
      username: 'redflower',
      password: 'password',
    },
    {
      username: 'butterfly',
      password: 'password',
    },
  ];
  
const seedUsers = () => User.bulkCreate(userData, {
      individualHooks:  true,

});
  module.exports = seedUsers;
  
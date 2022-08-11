//username and password
//add hooks to hash the password
const {Model , Datatypes} =require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require(bcrypt);

User.init(
    {
      // define columns
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      //Change the username to email >>change the validate key to email
      username: {
        type: DataTypes.STRING,
        isUnique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          len: [8]
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: async (user) => {
            console.log(user);
          try {
            const hashedPassword = await bcrypt.hash(user.password, 8);
            user.password = hashedPassword;
            return user;
          } catch (error) {
            throw new Error(error);
          }
        },
        beforeUpdate: async (user) => {
          if (user.password.trim().length > 0) {
            try {
              const hashedPassword = await bcrypt.hash(user.password, 8);
              user.password = hashedPassword;
              return user;
            } catch (error) {
              throw new Error(error);
            }
          }
        },
      },
    }
  );






module.exports = User;

//username and password
//add hooks to hash the password
const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync()(loginPw, this.password);
  }
}
User.init(
  {
    // define columns
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //Change the username to email >>change the validate key to email
    username: {
      type: Datatypes.STRING,
      isUnique: true,
      allowNull: false,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [8],
      },
    },
  },
  {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate: async (newUserData) => {
        console.log(newUserData);
        try {
          const hashedPassword = await bcrypt.hash(newUserData.password, 8);
          newUserData.password = hashedPassword;
          return newUserData;
        } catch (error) {
          throw new Error(error);
        }
      },
      beforeUpdate: async (updateduserData) => {
        if (updateduserData.password.trim().length > 0) {
          try {
            const hashedPassword = await bcrypt.hash(
              updateduserData.password,
              8
            );
            updateduserData.password = hashedPassword;
            return updateduserData;
          } catch (error) {
            throw new Error(error);
          }
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;

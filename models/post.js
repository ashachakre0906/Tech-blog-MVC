const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    title: {
      type: Datatypes.STRING(100),
      allowNull: false,
    },
    body: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Post",
  }
);
module.exports = Post;

const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: Datatypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  {
    commentData: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    userId: {
      type: Datatypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    postId: {
      type: Datatypes.INTEGER,
      references: {
        model: post,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Comment",
  }
);
module.exports = Comment;

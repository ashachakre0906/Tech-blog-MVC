const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postTitle: {
      type: Datatypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    postDescription: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
    dateCreated: {
      type: Datatypes.DATE,
      allowNull: false,
      defaultValue: Datatypes.NOW,
    },
    userId: {
      type: Datatypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
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

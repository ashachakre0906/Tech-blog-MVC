const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'//If you delete a user all the posts related to the  user would get deleted
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

User.hasMany(Post,{
  foreignKey: 'userId',
  onDelete: CASCADE

});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: CASCADE,

});

Comment.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: CASCADE,
});

module.exports = {
  User,
  Comment,
  Post
};
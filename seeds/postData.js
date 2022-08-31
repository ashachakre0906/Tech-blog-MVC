const sequelize = require("../config/connection");
const { Post } = require ('../models');
const postData = [
  {
    post_title: "Engagement Ring",
    post_description:"Zales diamonds",
    date_created:2007-04-30,
    user_id: 1,
  },
  {
    post_title: "Eat More Oranges",
    post_description:"antioxidant-rich foods",
    date_created:2007-04-30,
    user_id: 2,
  },
  {
    post_title: " Is Android Better Than iOS",
    post_description:"hmm..not sure!!",
    date_created:2007-05-11,
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;

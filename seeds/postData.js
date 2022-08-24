const { Post } = require ('../models');
const postData = [
  {
    postTitle: "Engagement Ring",
    postDescription:
      "Zales diamonds",
    user_id: 1,
  },
  {
    postTitle: "Eat More Oranges",
    postDescription:
      "antioxidant-rich foods",
    user_id: 2,
  },
  {
    postTitle: " Is Android Better Than iOS",
    postDescription:
      "hmm..not sure!!",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;

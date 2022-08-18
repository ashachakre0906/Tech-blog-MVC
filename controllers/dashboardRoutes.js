const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../util/auth");

//Get All Posts

router.get("/", withAuth, async (req, res) => {
  try {
    const getPost = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User],
    });
    const posts = getPost.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("all-posts", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;

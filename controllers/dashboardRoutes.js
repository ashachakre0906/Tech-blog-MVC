const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

//Get All existing Posts associated to a specific User

router.get("/", withAuth, async (req, res) => {
  try {
    const getPost = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: User,
    });
    const posts = getPost.map((post) => post.get({ plain: true })); //we are fetching the data and it gonna map each object and renders it on the page into the plain text
    res.render("all-posts-dashboard", {
      // layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

// Adding a new post
router.get('/new',(req, res) => {
  res.render('new-post', {
  });
});

// Creating a new post >>router.get
// Edit a post associated with a specific user >>get that one post and update the post
// /edit/id >>findByPk
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const editPost = await Post.findByPk(req.params.id);
    if (editPost) {
      const post = editPost.get({ plain: true });
      console.log(post);
      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(400).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;

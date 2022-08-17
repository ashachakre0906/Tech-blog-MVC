const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../util/auth");

//GET Route to get All Comments

router.get("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [User],
    });
    //Serialize the Data
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(comments);
    //Pass serialize data to handlebars.js Template
    res.render("single-post", { comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST Route add new comment

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

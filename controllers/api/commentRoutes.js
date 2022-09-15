const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

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
    res.render("singlepost", { comments, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST Route add new comment

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

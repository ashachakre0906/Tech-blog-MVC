const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//Create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      postTitle: req.body.postTitle,
      postDescription: req.body.postDescription,
      user_id: req.session.user_id
    });
      console.log('your new post created')
      console.log(newPost);
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Update a post

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a post

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletePost) {
      res.status(404).json({ message: "No Post found with this id!" });
      return;
    }
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

 module.exports = router;

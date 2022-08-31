const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//get route to get all posts
router.get("/", async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const allPosts = await Post.findAll({
      include: [User,Comment]
    });
    res.json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new post
router.post('/', withAuth, (req, res) => {
  const newPost = Post.create({
          title: req.body.post_title,
          content: req.body.post_description,
          user_id: req.session.user_id
      })
      .then(newPost => res.json(newPost))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


//Create a new post

// router.post('/', withAuth, (req, res) => {
//   Post.create({
//     post_title:req.body.post_title,
//     post_description: req.body.post_description,
//     user_id: req.session.user_id
//   })
//   .then(postData => {console.log('POST DATA', postData),res.json(postData)})
//   .catch(err => {
//     res.status(500).json(err)  
//   })
// })
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newPost = await Post.create({
//       post_title: req.body.post_title,
//       post_description: req.body.post_description,
//       user_id: req.session.user_id,
//     });
//       console.log('your new post created')
//       console.log(newPost);
//     res.status(200).json(newPost);

//   } catch (err) {
//     console.log(err);
//     console.log(req.session.user_id);
//     res.status(500).json(err);
//   }
// });

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

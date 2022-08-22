const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../util/auth");

//Get All existing Posts associated to a specific User

router.get("/", withAuth, async (req, res) => {
  try {
    const getPost = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User, Comment],
    });
    const posts = getPost.map((post) => post.get({ plain: true }));//we are fetching the data and it gonna map each object and renders it on the page into the plain text
    console.log(posts);
    res.render("dashboard");
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;

//Creating a new post >>router.get
//Edit a post associated with a specific user >>get that one post and update the post
// /edit/id >>findByPk
router.get('/edit/:id', withAuth, async (req,res) =>{
  const postData = await Post.findByPk(req.params.id, {
    include: [User, Comment],
  });
  const post = postData.get({plain: true});
  res.render('edit-post',{
    post , loggedIn:true
  });

});




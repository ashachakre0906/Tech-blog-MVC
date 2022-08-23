const router = require('express').Router();
const { User } = require('../../models');
// waits for something to happen
//signup
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body,password,

    });
   //Defining the below properties
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//login route
router.post('/login', async (req, res) => {
  try {
    const userLogin = await User.findOne({ where: { username: req.body.username } });

    if (!userLogin) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    const validPassword = await userLogin.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userLogin.id;
      req.session.username = userLogin.username;
      req.session.logged_in = true;
      
      res.json({ userLogin, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
//logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

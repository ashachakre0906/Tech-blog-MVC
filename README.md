## Description
Challenge this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

[Solution URL](hhttps://github.com/ashachakre0906/Tech-blog-MVC)
[Deploy URL](https://techy-blog-mvc.herokuapp.com/)
 ## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [Questions](#questions)

## User Story
```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
***The following animation demonstrates the application functionality***
![Live Demo](/public/assets/images/tech-blog-mvc.gif)

***Code Examples and Screenshots***
<img src="./public/assets/images/login.png">
<img src="./public/assets/images/dashboard.png">

- Backend route which Gets All existing Posts associated to a specific User
```js
router.get("/", withAuth, async (req, res) => {
  try {
    const getPost = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: User,
    });
    const posts = getPost.map((post) => post.get({ plain: true })); //we are fetching the data and it gonna map each object and renders it on the page into the plain text
    res.render("all-posts-dashboard", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});
```
- FE fetching the api route `/api/posts'` to create new post using http method POST.
  ```js
  const newResponse = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
          post_title,
          post_description,
      }),
      headers: { 'Content-Type': 'application/json' },
  });
  if (newResponse.ok) {
      document.location.replace('/dashboard');
  } else {
      alert('Unable to create new post')
  };
  ```
## Technologies Used
![Javascript Badge](https://img.shields.io/badge/language-Javascript-blue.svg)
![Express Badge](https://img.shields.io/badge/backend-Express-yellow.svg)
![Node Badge](https://img.shields.io/badge/backend-Node-orange.svg)
![MySql2 Badge](https://img.shields.io/badge/backend-MySql2-magenta.svg)
![Sequelize Badge](https://img.shields.io/badge/backend-Sequelize-purple.svg)
![Deployment Badge](https://img.shields.io/badge/Deployment-Heroku-green.svg)


## Credits
Thank you all TA's and my tutor Joem Casusi for helping debugging the errors in my code.

## Questions
Please reach out to me:<br>
Email Address: chourpagar.asha@gmail.com <br>
Github Repo URL:[GitHub](https://github.com/ashachakre0906)
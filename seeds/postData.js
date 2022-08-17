
const postData = [
  {
    postTitle: "Where To Buy An Engagement Ring",
    postDescription:
      "Zales diamonds are low quality and they capitalise on the naivety of buyers and the popularity of their name. Whiteflash, James Allen and Blue Nile all offer large inventories of quality diamonds, complete with high-res imaging/video and diamond certificates.",
    userId: 1,
  },
  {
    postTitle: "A Guide To Feeding Toddlers.",
    postDescription:
      "Milks is an important part of a toddler's diet. It provides calcium and vitamin D to help build strong bones. Toddlers should have 700 milligrams of calcium and 600 IU (International Units) of vitamin D (which aids in calcium absorption) a day. This calcium need is met if kids get the recommended two servings of dairy foods every day. But those servings provide less than half of the necessary vitamin D, so doctors often recommend vitamin D supplements. Your doctor will let you know if your toddler needs a supplement.",
    userId: 2,
  },
  {
    postTitle: " Is Android Better Than iOS",
    postDescription:
      "Apple and Google both have fantastic app stores. But Android is far superior at organizing apps, letting you put important stuff on the home screens and hide less useful apps in the app drawer. Also, Android widgets are much more useful than Apple",
    userId: 3,
  },
  // {
  //   postTitle: "You Should Eat More Oranges",
  //   postDescription:
  //     "They are packed with anti-inflammatory properties. Oranges and other antioxidant-rich foods are even more powerful than medication in fighting long-term inflammation. That is the condition with links to cancer, heart disease, diabetes, arthritis, depression and Alzheimer",
  //   userId: 4,
  // },
  // {
  //   postTitle: "Lose Weight By Exercising",
  //   postDescription:
  //     "Exercise is helpful for weight loss and maintaining weight loss. Exercise can increase metabolism, or how many calories you burn in a day. It can also help you maintain and increase lean body mass, which also helps increase number of calories you burn each day.",
  //   userId: 5,
  // },
];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;

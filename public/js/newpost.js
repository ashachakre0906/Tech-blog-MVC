const createPostHandler = async (event) => {
  event.preventDefault();
  const postTitle = document
    .querySelector('input[name="post-title"]')
    .value.trim();
  const postDescription = document
    .querySelector('input[name = "post-description"]')
    .value.trim();

  console.log(postTitle);
  console.log(postDescription);

  await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({
      postTitle,
      postDescription,
    }),
    headers: { "Content-Type": "application-json" },
  });
};
document
  .querySelector("#create-post-form")
  .addEventListener("submit", createPostHandler);

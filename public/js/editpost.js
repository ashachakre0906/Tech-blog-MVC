//EDIT POST
const editPostHandler = async (event) => {
  event.preventDefault();
  const postId = document.querySelector('input[name="post-id"]').value;
  const post_title = document
    .querySelector('input[name="post_title"]')
    .value.trim();
  const post_description = document
    .querySelector('textarea[name="post_description"]')
    .value.trim();
  console.log(postId);
  console.log(post_title);
  console.log(post_description);

  const response = await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      post_description,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("unable to update the post");
  }
  document.location.replace("/dashboard");
};
//DELETE POST
const deletebuttonHandler = async (event) => {
  const postId = document.querySelector('input[name="post-id"]').value;
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/dashboard");
  }
};

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editPostHandler);
document
  .querySelector("#delete-btn")
  .addEventListener("click", deletebuttonHandler);

const postId = document.querySelector('input[name="post-id"]').value.trim();
const commentFormHandler = async (event) => {
  event.preventDefault();
  const commentBody = document
    .querySelector('textarea[name="comment-body"]').value.trim();
  if (commentBody) {
    const response = await fetch("/api/comment", {
      method: "post",
      body: JSON.stringify({ postId, commentBody }),
      headers: { "Content-type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.status.text);
    }
  }
};

document
.querySelector('#new-comment-form')
.addEventListener('submit',commentFormHandler);

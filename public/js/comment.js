const post_id = document.querySelector('input[name="post-id"]').value.trim();
const commentFormHandler = async (event) => {
  event.preventDefault();
  const commentData = document
    .querySelector('textarea[name="comment-body"]').value.trim();
  if (commentData) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ post_id, commentData }),
      headers: { "Content-Type": "application/json" },
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

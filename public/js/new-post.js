const newPostFormHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title"]').value.trim();
  const post_body = document.querySelector('textarea[name="post-description"]').value.trim();
  
  // console.log(postTitle);
  // console.log(postContent);

  const newResponse = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
          post_title,
          post_body,
      }),
      headers: { 'Content-Type': 'application/json' },
  });
  if (newResponse.ok) {
      document.location.replace('/dashboard');
  } else {
      alert('Unable to create new post')
  };
};

document
  .querySelector('#create-post-form')
  .addEventListener('submit', newPostFormHandler);
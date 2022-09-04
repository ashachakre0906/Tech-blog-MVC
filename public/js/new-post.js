const newPostFormHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title"]').value.trim();
  const post_description = document.querySelector('textarea[name="post-description"]').value.trim();
  
  console.log(post_title);
  console.log(post_description);

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
};

document
  .querySelector('#create-post-form')
  .addEventListener('submit', newPostFormHandler);
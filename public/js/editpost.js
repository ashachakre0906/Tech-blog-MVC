const editPostHandler = async (event) => {
    event.preventDefault();
const postId = document.getElementById('input[name="post-id"]');
const post_title = document.getElementById('input[name="post-title"]').value.trim();
const post_description = document.getElementById('text-area[name="post-description"]').value.trim();

console.log(post_title);
console.log(post_description);

const response = await fetch(`/api/posts/${postId}`,{
    method: 'PUT',
    body: JSON.stringify({
        post_title,
        post_description,
        
    }),
    headers: {
        'Content-type': 'application/json',
    }
});
if (response.ok){
    document.location.replace('/dashboard');
} else {
    alert('unable to update the post');
}
 document.location.replace('/dashboard');
};

const deletebuttonHandler = async(event) =>{
    const response = await fetch(`/api/posts/${postId}`,{
        method: 'DELETE',
    });
    document.location.replace('/dashboard');
};

document.querySelector('#edit-post-form')
        .addEventListener('submit',editPostHandler);
document.querySelector('#delete-btn')
        .addEventListener('click',deletebuttonHandler)
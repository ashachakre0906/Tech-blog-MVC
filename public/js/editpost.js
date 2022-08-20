const { DELETE } = require("sequelize/types/query-types");

const editPostHandler = async (event) => {
    event.preventDefault();
const postId = document.getElementById('edit-post-form');
const postTitle = document.getElementById('input[name="post-title"]').value.trim();
const postDescription = document.getElementById('text-area[name="post-description"]').value.trim();

const response = await fetch(`/api/post/${postId}`,{
    method: 'PUT',
    body: JSON.stringify({
        postTitle,
        postDescription,
        
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
    const response = await fetch(`/api/post/${postId}`,{
        method: 'DELETE',
    });
    document.location.replace('/dashboard');
};

document.querySelector('#edit-post-form')
        .addEventListener('submit',editPostHandler);
document.querySelector('#delete-btn')
        .addEventListener('click',deletebuttonHandler)
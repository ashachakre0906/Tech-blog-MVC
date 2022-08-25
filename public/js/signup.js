const signUpFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
        const response = await fetch('/api/user/signup', {
            method : 'POST',
            body : JSON.stringify({ username, password }),
            headers : { 'Content-type' : 'application/json'},
    });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Unable to SignUp');
        }
}

document
.querySelector('.signup-form')
.addEventListener('submit', signUpFormHandler);


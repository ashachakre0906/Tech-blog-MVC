const signUpFormHandler = async (event) => {
    event.preventDefault();
    const nameEl = document.querySelector('name-signup').value.trim();
    const emailEl = document.querySelector('email-signup').value.trim();
    const passwordEl = document.querySelector('password-signup').value.trim();
    const confirmPasswordEl = document.querySelector('confirm-password-signup').value.trim();

        const response = await fetch('/api/user/signup', {
            method : 'POST',
            body : JSON.stringify({ nameEl, emailEl, passwordEl, confirmPasswordEl}),
            headers : { 'Content-type' : 'application/json'},

        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Unable to SignUp');
        }
    };

document
.querySelector('.signup-form')
.addEventListener('submit', signUpFormHandler);


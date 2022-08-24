const signUpFormHandler = async (event) => {
    event.preventDefault();
    const nameEl = document.getElementById('name-signup').value.trim();
    const emailEl = document.getElementById('email-signup').value.trim();
    const passwordEl = document.getElementById('passwordsign-up').value.trim();
    const confirmPasswordEl = document.getElementById('confirmpassword-signup').value.trim();

    if (nameEl && emailEl && passwordEl && confirmPasswordEl){
        const response = await fetch('/api/user/signup', {
            method : 'post',
            body : JSON.stringify({ nameEl, emailEl, passwordEl, confirmPasswordEl}),
            headers : { 'Content-type' : 'application/json'},

        });

        }
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to login');
        }
    }

document
.querySelector('#signup-form')
.addEventListener('submit', signUpFormHandler);


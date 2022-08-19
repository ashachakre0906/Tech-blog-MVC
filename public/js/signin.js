const signinFormHandler = async (event) => {
//Collect values from the login form
const username = document.getElementById('username-login').value.trim();
const password = document.getElementById('password-login').value.trim();

 if (username && password) {
    //Send a POST request to the API end point
    const response = await fetch('/api/user/login',{
      method : POST,
      body : JSON.stringify({
         username : username,
         password : password,

      }),
      headers : {'Content-type' : 'application/json'}
   });
      if (response.ok) {
         document.location.replace('/dashboard');
      } else {
         alert ('cannot login');
      }

    }
}

document.querySelector('login-form')
        .addEventListener('submit',signinFormHandler)




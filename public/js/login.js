const signinFormHandler = async (event) => {
   event.preventDefault();
//Collect values from the login form
const usernameEl = document.querySelector('#username-login');
const passwordEl = document.querySelector('#password-login');

    //Send a POST request to the API end point
    const response = await fetch('/api/users/login',{
      
      method : 'POST',
      body : JSON.stringify({
         username: usernameEl.value,
         password: passwordEl.value,

      }),
      headers : {'Content-type' : 'application/json'},
   });
      if (response.ok) {
         console.log('login sucessful')
         document.location.replace('/dashboard');
      } else {
         alert ('cannot login');
      }
   };
   //  console.log(username , password);

document.querySelector('.login-form')
        .addEventListener('submit',signinFormHandler)




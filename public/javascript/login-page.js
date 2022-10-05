// logic for processing sign-in

// select and listen to the form elements
document.querySelector('#login').addEventListener('submit', loginHandler);
document.querySelector('#signup').addEventListener('submit', signupHandler);

// functions
// login request
async function loginHandler(event) {
    event.preventDefault(); // prevent page reload

    // get variables to pass into api
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) { // if we have both
        const response = await fetch('/api/users/login', {
            method: 'post', // we are making a post request
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        // check our response
        if (response.ok) {
            console.log(response);
            document.location.replace('/'); // got to homepage
        } else {
            alert('Sorry, login has failed. Please try again in a moment.');
        }
    }
}

// signup request
async function signupHandler(event) {
    event.preventDefault(); // prevent page reload

    // get vars to pass into api
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) { // if we have both
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        // check our response
        if (response.ok) {
            console.log(response);
            document.location.replace('/'); // got to homepage
        } else {
            alert('Sorry, signup has failed. Please try again in a moment.');
        }
    }
}
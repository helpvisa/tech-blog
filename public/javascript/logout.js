// logout functionality
async function logoutHandler() {
    // query our logout api
    const response = await fetch('/api/users/logout', {
        method: 'post',
    });

    if (response.ok) {
        document.location.replace('/'); // return to homepage
    } else {
        alert('Logout failed. Please try again in a moment.');
    }
}

// listen to logout button
document.querySelector('#logout').addEventListener('click', logoutHandler);
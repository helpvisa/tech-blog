// route to new post page
function createNewPost() {
    document.location.replace('/dash/new');
}

// add this link to button
document.querySelector('#create-post').addEventListener('click', createNewPost);
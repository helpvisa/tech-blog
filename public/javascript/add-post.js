// new post handler
async function handleNewPost(event) {
    event.preventDefault(); // prevent page refresh on submission

    // capture data
    const title = document.querySelector('#post-title').value;
    const text = document.querySelector('#post-text').value;

    // pass into api POST call
    const response = await fetch('/api/posts/', {
        method: 'post',
        body: JSON.stringify({
            title,
            text
        }),
        headers: {'Content-Type': 'application/json'}
    });

    // check response
    if (response.ok) {
        console.log(response);
        document.location.replace('/dash'); // go back to dashboard
    } else {
        alert('Sorry, failed to create new post. Please try again in a moment.');
    }
}

// capture form and add callback
document.querySelector('#post-form').addEventListener('submit', handleNewPost);
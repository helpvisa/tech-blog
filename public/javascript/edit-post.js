// functions
async function deletionHandler() {
    // get post id from page URL
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // api DELETE request
    const response = await fetch('/api/posts/' + id, {
        method: 'delete'
    });

    // check response
    if (response.ok) {
        console.log(response);
        document.location.replace('/dash'); // go back to dashboard
    } else {
        alert('Sorry, delete request failed. Please try again in a moment.');
    }
}

async function editHandler() {
    // get post id from page URL
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    // capture inputs
    const title = document.querySelector('#edit-title').value;
    const text = document.querySelector('#edit-text').value;

    if (title && text) {
        // api PUT request
        const response = await fetch('/api/posts/' + id, {
            method: 'put',
            body: JSON.stringify({
                title,
                text
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check response
        if (response.ok) {
            console.log(response);
            document.location.replace('/post/' + id); // go to updated post
        } else {
            alert('Sorry, failed to update post. Please try again in a moment.');
        }
    }
}

// listen for button clicks
// edit button
document.querySelector('#edit-button').addEventListener('click', editHandler);
// delete button
document.querySelector('#delete-button').addEventListener('click', deletionHandler);
// comment post function
async function addCommentHandler() {
    // get post id
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // get comment text
    const text = document.querySelector('#comment-box').value;

    // check text
    if (text) {
        const response = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                text,
                post_id
            }),
            headers: {'Content-Type': 'application/json'}
        });

        // check response
        if (response.ok) {
            document.querySelector('#comment-box').value = '';
            console.log(response);
            document.location.reload();
        } else {
            alert('Sorry, failed to post comment. Please try again in a moment.');
        }
    }
}

// query page elements
document.querySelector('#comment-button').addEventListener('click', addCommentHandler);
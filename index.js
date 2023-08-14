/**
 * Function to get the post and its comments.
 * It is triggered upon clicking the Get Post button.
 */
function mergePostWithComments() {
    fetch('https://jsonplaceholder.typicode.com/posts/50')
        .then((response) => response.json())
        .then((post) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then((response) => response.json())
                .then((comments) => {
                    const postWithComments = {...post, comments: comments}; // Merge the post with the comments array
                    console.log('Merged Data:', postWithComments); // Log merged data to the console

                    const mergedDataElement = document.getElementById('mergedData');

                    /**
                     * Create a HTML string to display the merged data
                     */
                    let html = `
                    <p><b>Post ID: </b>${postWithComments.id}</p>
                    <p><b>Title: </b>${postWithComments.title}</p>
                    <p><b>Body: </b>${postWithComments.body}</p>
                    <p><b>Comments:</b></p>
                    <!-- Display the comments in a table, makes it cleaner -->
                    <table>
                        <thead>
                            <tr>
                                <th>Comment Title</th>
                                <th>Comment Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${postWithComments.comments.map(comment => `
                                <tr>
                                    <td>${comment.name}</td>
                                    <td>${comment.body}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                `;

                    // Set the HTML content of the element
                    mergedDataElement.innerHTML = html;
                });
        });
}
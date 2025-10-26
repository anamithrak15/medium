// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to load and display the current post
function loadPost() {
    const currentPost = localStorage.getItem('currentPost');

    if (!currentPost) {
        // If no post is found, redirect to home
        window.location.href = 'index.html';
        return;
    }

    const post = JSON.parse(currentPost);

    // Update page title
    document.title = `${post.title} - My Blog`;

    // Update post content
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = formatDate(post.date);
    document.getElementById('read-time').textContent = post.readTime;
    document.getElementById('post-body').innerHTML = post.content;
}

// Load post when page loads
document.addEventListener('DOMContentLoaded', loadPost);
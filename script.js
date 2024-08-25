document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.getElementById('post-button');
    const postContent = document.getElementById('post-content');
    const postList = document.getElementById('post-list');

    const addFollowerButton = document.getElementById('add-follower-button');
    const followerName = document.getElementById('follower-name');
    const followerList = document.getElementById('follower-list');

    // Load posts and followers from localStorage
    loadPosts();
    loadFollowers();

    postButton.addEventListener('click', () => {
        const content = postContent.value.trim();
        if (content) {
            savePost(content);
            postContent.value = ''; // Clear the textarea
            loadPosts(); // Reload the posts
        }
    });

    addFollowerButton.addEventListener('click', () => {
        const name = followerName.value.trim();
        if (name) {
            saveFollower(name);
            followerName.value = ''; // Clear the input
            loadFollowers(); // Reload the followers
        }
    });

    function savePost(content) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ content });
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        postList.innerHTML = '';
        posts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.className = 'post-item';
            postItem.textContent = post.content;
            postList.appendChild(postItem);
        });
    }

    function saveFollower(name) {
        const followers = JSON.parse(localStorage.getItem('followers')) || [];
        followers.push({ name });
        localStorage.setItem('followers', JSON.stringify(followers));
    }

    function loadFollowers() {
        const followers = JSON.parse(localStorage.getItem('followers')) || [];
        followerList.innerHTML = '';
        followers.forEach(follower => {
            const followerItem = document.createElement('li');
            followerItem.className = 'follower-item';
            followerItem.textContent = follower.name;
            followerList.appendChild(followerItem);
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
  const blogForm = document.getElementById("blogForm");
  const toggleButton = document.getElementById("toggleButton");

  if (blogForm) {
    blogForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;
      if (!username || !title || !content) {
        alert("Please complete all fields");
        return;
      }
      const post = {
        username: username,
        title: title,
        content: content,
      };
      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));
      window.location.href = "posts.html";
    });
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  }
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
  const postsList = document.getElementById("postsList");
  if (postsList) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (posts.length === 0) {
      const noPostsMessage = document.createElement("p");
      noPostsMessage.textContent = "No posts available";
      postsList.appendChild(noPostsMessage);
    } else {
      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>By: ${post.username}</p>
          <p>${post.content}</p>
        `;
        postsList.appendChild(postElement);
      });
    }
  }
});

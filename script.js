const navList = document.querySelector(".nav_list");
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

const blogPosts = [
  { title: "Post 1", content: "This is the content of post 1." },
  { title: "Post 2", content: "This is the content of post 2." },
  { title: "Post 3", content: "This is the content of post 3." },
  { title: "Post 4", content: "This is the content of post 4." },
  { title: "Post 5", content: "This is the content of post 5." },
  { title: "Post 6", content: "This is the content of post 6." },
  { title: "Post 7", content: "This is the content of post 7." },
  { title: "Post 8", content: "This is the content of post 8." },
];

let currentPostIndex = 0;
const postsToShow = 3;

function loadPosts() {
  const blogContainer = document.getElementById("blog_layout");
  const posts = blogPosts.slice(
    currentPostIndex,
    currentPostIndex + postsToShow
  );

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("blog");
    postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
    blogContainer.appendChild(postElement);
  });

  currentPostIndex += postsToShow;

  // Hide the button if there are no more posts
  if (currentPostIndex >= blogPosts.length) {
    document.getElementById("load").style.display = "none";
  }
}

// Load initial posts
loadPosts();

// Add event listener to the button
document.getElementById("load").addEventListener("click", loadPosts);

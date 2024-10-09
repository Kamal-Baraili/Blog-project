const navList = document.querySelector(".nav_list");
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

let currentBlogIndex = 0;
const blogsPerPage = 6;
const blogs = document.querySelectorAll(".blog");
const loadMoreButton = document.getElementById("load");

function showBlogs() {
  const totalBlogs = blogs.length;
  for (
    let i = currentBlogIndex;
    i < currentBlogIndex + blogsPerPage && i < totalBlogs;
    i++
  ) {
    blogs[i].style.display = "block";
  }
  currentBlogIndex += blogsPerPage;

  if (currentBlogIndex >= totalBlogs) {
    loadMoreButton.style.display = "none";
  }
}

showBlogs();

loadMoreButton.addEventListener("click", showBlogs);

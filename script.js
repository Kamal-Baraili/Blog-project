const navList = document.querySelector(".nav_list");
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

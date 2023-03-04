// target element
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const arrows = [...document.querySelectorAll(".arrow-btn")];
// toggle sidebar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});
// close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
// active dropdown on click
arrows.forEach((arrow) => {
  arrow.parentElement.addEventListener("click", function (e) {
    const dropdown = e.currentTarget.nextElementSibling;
    // only to toggle between arrow down and up
    e.currentTarget.classList.toggle("active");
    // to display dropdown menu
    dropdown.classList.toggle("active");
  });
});

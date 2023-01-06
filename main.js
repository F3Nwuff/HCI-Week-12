const navLinks = document.querySelectorAll(".navl li");
const menuBtn = document.querySelector(".menub");
const mobileMenu = document.querySelector(".menu");
const mobileLinks = document.querySelectorAll(".mob li");

menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".menub img");
  menuBtn.classList.toggle("active-btn");
  mobileMenu.classList.toggle("active-menu");
  overflow.classList.toggle("active-menu");
  if (menuBtn.classList.contains("active-btn")) {
    icon.src = "./images/icon-close-menu.svg";
  } else {
    icon.src = "./images/icon-menu.svg";
  }
});

navLinks.forEach((link) => {
  const subMenu = link.querySelector(".sub-menu");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});
mobileLinks.forEach((link) => {
  const subMenu = link.querySelector(".sub");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});

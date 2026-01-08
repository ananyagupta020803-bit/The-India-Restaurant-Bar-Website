document.addEventListener("DOMContentLoaded", () => {

  const nav = document.querySelector(".nav-container");
  const hamburger = document.querySelector(".hamburger");
  const mobileHome = document.querySelector(".mobile-home");
  const mobileDropdown = document.querySelector(".mobile-dropdown");

  /* Toggle menu */
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("menu-open");
  });

  /* Mobile HOME dropdown */
  mobileHome.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    mobileDropdown.classList.toggle("open");
  });

  /* Close menu on outside click */
  document.addEventListener("click", () => {
    nav.classList.remove("menu-open");
    mobileDropdown.classList.remove("open");
  });

});

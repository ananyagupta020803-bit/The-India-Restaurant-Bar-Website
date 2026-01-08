document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.querySelector(".nav-container");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileDropdown = document.querySelector(".mobile-dropdown");
  const mobileHomeLink = document.querySelector(".mobile-home");

  /* ===============================
     HAMBURGER TOGGLE
  =============================== */
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navContainer.classList.toggle("menu-open");
  });

  /* ===============================
     MOBILE HOME DROPDOWN
  =============================== */
  mobileHomeLink.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    mobileDropdown.classList.toggle("open");
  });

  /* ===============================
     CLOSE MENU ON OUTSIDE CLICK
  =============================== */
  document.addEventListener("click", (e) => {
    if (!navContainer.contains(e.target)) {
      navContainer.classList.remove("menu-open");
      mobileDropdown.classList.remove("open");
    }
  });

  /* ===============================
     CLOSE MENU AFTER LINK CLICK
  =============================== */
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navContainer.classList.remove("menu-open");
      mobileDropdown.classList.remove("open");
    });
  });
});

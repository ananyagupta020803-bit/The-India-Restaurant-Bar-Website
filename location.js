document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.querySelector(".nav-container");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  const mobileDropdown = document.querySelector(".mobile-dropdown");
  const mobileHome = document.querySelector("#mobileHome");

  /* ===============================
     SAFETY CHECK
  =============================== */
  if (!navContainer || !hamburger || !mobileMenu) return;

  /* ===============================
     HAMBURGER TOGGLE
  =============================== */
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navContainer.classList.toggle("menu-open");
  });

  /* ===============================
     MOBILE HOME DROPDOWN TOGGLE
  =============================== */
  if (mobileHome && mobileDropdown) {
    mobileHome.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      mobileDropdown.classList.toggle("open");
    });
  }

  /* ===============================
     CLOSE MENU ON LINK CLICK
  =============================== */
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navContainer.classList.remove("menu-open");
      mobileDropdown?.classList.remove("open");
    });
  });

  /* ===============================
     CLOSE MENU ON OUTSIDE CLICK
  =============================== */
  document.addEventListener("click", (e) => {
    if (!navContainer.contains(e.target)) {
      navContainer.classList.remove("menu-open");
      mobileDropdown?.classList.remove("open");
    }
  });
});

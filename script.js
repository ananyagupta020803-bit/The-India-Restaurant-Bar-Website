document.addEventListener("DOMContentLoaded", () => {

  const navContainer = document.querySelector(".nav-container");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileDropdown = document.querySelector(".mobile-dropdown");
  const mobileDropdownToggle = document.querySelector(".mobile-dropdown > a");

  if (!navContainer || !hamburger || !mobileMenu) return;

  /* TOGGLE MOBILE MENU */
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navContainer.classList.toggle("menu-open");
    document.body.classList.toggle("nav-open");
  });

  /* DROPDOWN TOGGLE */
  if (mobileDropdown && mobileDropdownToggle) {
    mobileDropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      mobileDropdown.classList.toggle("open");
    });
  }

  /* CLOSE ON LINK CLICK */
  mobileMenu.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    if (link.closest(".mobile-dropdown")) return;

    navContainer.classList.remove("menu-open");
    document.body.classList.remove("nav-open");
  });

  /* CLOSE ON OUTSIDE CLICK */
  document.addEventListener("click", (e) => {
    if (!navContainer.contains(e.target)) {
      navContainer.classList.remove("menu-open");
      document.body.classList.remove("nav-open");
      mobileDropdown?.classList.remove("open");
    }
  });

});

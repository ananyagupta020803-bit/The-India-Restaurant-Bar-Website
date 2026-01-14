document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     NAVBAR LOGIC (UNCHANGED)
  ========================== */
  const navContainer = document.querySelector(".nav-container");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileDropdown = document.querySelector(".mobile-dropdown");
  const mobileDropdownToggle = document.querySelector(".mobile-dropdown > a");

  if (navContainer && hamburger && mobileMenu) {

    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      navContainer.classList.toggle("menu-open");
      document.body.classList.toggle("nav-open");
    });

    if (mobileDropdown && mobileDropdownToggle) {
      mobileDropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        mobileDropdown.classList.toggle("open");
      });
    }

    mobileMenu.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      if (link.closest(".mobile-dropdown")) return;

      navContainer.classList.remove("menu-open");
      document.body.classList.remove("nav-open");
    });

    document.addEventListener("click", (e) => {
      if (!navContainer.contains(e.target)) {
        navContainer.classList.remove("menu-open");
        document.body.classList.remove("nav-open");
        mobileDropdown?.classList.remove("open");
      }
    });
  }

  /* ==========================
     HERO SLIDER (FIXED)
  ========================== */
  const slides = document.querySelectorAll(".hero-slide");
  const nextBtn = document.querySelector(".slider-arrow.right");
  const prevBtn = document.querySelector(".slider-arrow.left");

  if (!slides.length || !nextBtn || !prevBtn) return;

  let currentIndex = 0;
  let intervalId = null;
  const DURATION = 4000;
  let isAnimating = false;

  function updateSlides(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function goNext() {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides(currentIndex);

    setTimeout(() => isAnimating = false, 300);
  }

  function goPrev() {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides(currentIndex);

    setTimeout(() => isAnimating = false, 300);
  }

  function startAuto() {
    stopAuto();
    intervalId = setInterval(goNext, DURATION);
  }

  function stopAuto() {
    if (intervalId) clearInterval(intervalId);
  }

  /* 🔥 UNIVERSAL EVENT (DESKTOP + MOBILE) */
  function handleNext(e) {
    e.preventDefault();
    e.stopPropagation();
    goNext();
    startAuto();
  }

  function handlePrev(e) {
    e.preventDefault();
    e.stopPropagation();
    goPrev();
    startAuto();
  }

  nextBtn.addEventListener("pointerup", handleNext);
  prevBtn.addEventListener("pointerup", handlePrev);

  startAuto();
});

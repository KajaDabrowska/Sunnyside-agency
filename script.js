const menuBtn = document.querySelector(".mobile-nav-toggle");
const menuSpan = document.querySelector(".mobile-nav-toggle__span");
const primNav = document.getElementById("primary-navigation");

menuBtn.addEventListener("click", () => {
  const visible = primNav.getAttribute("data-visible");

  if (visible === "false") {
    primNav.setAttribute("data-visible", "true");
    primNav.setAttribute("aria-hidden", "false");

    menuBtn.setAttribute("aria-expanded", true);
  } else {
    primNav.setAttribute("data-visible", "false");
    primNav.setAttribute("aria-hidden", "true");

    menuBtn.setAttribute("aria-expanded", false);
  }
});

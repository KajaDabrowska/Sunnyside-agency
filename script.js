const menuBtn = document.querySelector(".mobile-nav-toggle");
const menuSpan = document.querySelector(".mobile-nav-toggle__span");
const primNav = document.getElementById("primary-navigation");
const navDecoration = document.querySelector(".nav-deco-control");

menuBtn.addEventListener("click", () => {
  const visible = primNav.getAttribute("data-visible");

  if (visible === "false") {
    primNav.setAttribute("data-visible", "true");
    primNav.setAttribute("aria-hidden", "false");
    navDecoration.setAttribute("data-visible", "true");

    menuSpan.ariaExpanded = "true";
  } else {
    primNav.setAttribute("data-visible", "false");
    primNav.setAttribute("aria-hidden", "true");
    navDecoration.setAttribute("data-visible", "false");

    menuSpan.ariaExpanded = "false";
  }
});

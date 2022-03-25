const menuBtn = document.querySelector(".mobile-nav-toggle");
const menuSpan = document.querySelector(".mobile-nav-toggle__span");
const primNav = document.getElementById("primary-navigation");
const navDecoration = document.querySelector(".nav-deco");

menuBtn.addEventListener("click", () => {
  const visible = primNav.getAttribute("data-visible");

  // console.log(primNav.getAttribute("data-visible"));

  // console.log(visible === "false");
  if (visible === "false") {
    primNav.setAttribute("data-visible", "true");
    navDecoration.setAttribute("data-visible", "true");
    console.log(navDecoration.getAttribute("data-visible"));
    // console.log(menuSpan.ariaExpanded);
    menuSpan.ariaExpanded = "true";
  } else {
    primNav.setAttribute("data-visible", "false");
    navDecoration.setAttribute("data-visible", "false");
    // console.log(menuSpan.ariaExpanded);
    console.log(navDecoration.getAttribute("data-visible"));
    menuSpan.ariaExpanded = "false";
  }
});

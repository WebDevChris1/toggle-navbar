// Grab Elements
const toggleBtn = document.getElementById("toggle-btn");
const navContainer = document.getElementById("navbar-container");
const main = document.querySelector("main");

// Toggle Button
toggleBtn.addEventListener("click", function () {
  if (navContainer.style.left === "-25rem") {
    navContainer.style.left = "0rem";
    main.setAttribute("style", "background-color: rgba(0, 0, 0, .3)");
  } else {
    navContainer.style.left = "-25rem";
    main.setAttribute("style", "background-color: transparent");
  }
});

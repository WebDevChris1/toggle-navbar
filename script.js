const toggleBtn = document.getElementById("toggle-btn");
const navContainer = document.getElementById("navbar-container");
const main = document.querySelector("main");

toggleBtn.addEventListener("click", function () {
  if (navContainer.style.display === "none") {
    navContainer.style.display = "flex";
    main.setAttribute("style", "background-color: rgba(0, 0, 0, .3)");
  } else {
    navContainer.style.display = "none";
    main.removeAttribute("style");
  }
});

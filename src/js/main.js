var menuIcon = document.querySelector(".navbar");
var hamburger1 = document.querySelector(".hamburger-menu");
var hamburger2 = document.querySelector(".hamburger-menu2");

var navList = document.querySelector(".nav-list");
menuIcon.addEventListener("click", () => {
  // navbar.classList.toggle('change');

  if (navList.style.display === "block") {
    navList.style.display = "none";

    hamburger1.style.display = "flex";
    hamburger2.style.display = "none";
  } else {
    hamburger2.style.display = "flex";
    hamburger1.style.display = "none";
    navList.style.display = "block";
  }
});

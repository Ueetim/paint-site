// get footer date automatically
const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();
const menuBtn = document.querySelector('.menu-drop');

// make navbar stick on scroll

window.addEventListener("scroll", function () {
  const navItems = document.querySelector("#nav");
//   const nav = document.querySelector(".nav");
  const scrollHeight = window.pageYOffset; //pageYOffset returns the current scroll position
//   const navHeight = navItems.getBoundingClientRect().height; //returns the height of the item
  const navLink = document.querySelectorAll(".nav-link");

  // make back-to-top button appear on scroll
  const topBtn = document.querySelector(".top-btn");

  const navContact = document.querySelector(".nav-contact");

  if (scrollHeight > 200) {
    topBtn.classList.add("btn-show");
  } else {
    topBtn.classList.remove("btn-show");
  }

  // sticky nav

  let navAddress = false;

  if (scrollHeight > 100) {
    navItems.classList.add("nav-sticky");
    menuBtn.style.color = "var(--primary)";
    
    const display = window.getComputedStyle(navContact).display;

    if (display != "none") {
        navAddress = true;
        navContact.style.display = 'none';
    }

    //changes the color of the nav links on scroll
    navLink.forEach(function (item) {
      if ((item.style.color = "white")) {
        item.style.color = "var(--primary)";
      }
    });
  } else {

    if (navAddress == true) {
        navContact.style.display = "flex";
        navAddress = false;
    }

    navItems.classList.remove("nav-sticky");
    menuBtn.style.color = "var(--white)";
    navLink.forEach(function (item) {
      item.style.color = "white";
    });
  }
});
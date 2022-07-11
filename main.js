// get footer date automatically
const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();
const menuBtn = document.querySelector(".menu-drop");

// make navbar stick on scroll
const navContact = document.querySelector(".nav-contact");

// hide and show nav contact on scroll
const display = window.getComputedStyle(navContact).display;
let navShow;

if (display == 'flex') {
  navShow = true;
} else {
  navShow = false;
}

window.addEventListener("scroll", function () {
  const navItems = document.querySelector("#nav");
  const scrollHeight = window.pageYOffset; //pageYOffset returns the current scroll position
  const navLink = document.querySelectorAll(".nav-link");

  // make back-to-top button appear on scroll
  const topBtn = document.querySelector(".top-btn");

  if (scrollHeight > 200) {
    topBtn.classList.add("btn-show");
  } else {
    topBtn.classList.remove("btn-show");
  }

  // sticky nav

  if (navShow == "true") {
    navShow = true;
  } else {
    navShow = false;
  }

  if (scrollHeight > 300) {
    navItems.classList.add("nav-sticky");
    menuBtn.style.color = "var(--primary)";

    // const display = window.getComputedStyle(navContact).display;

    if (display != "none") {
      // navContact.style.display = "none";
      navContact.style.display = 'none';
    }

    //changes the color of the nav links on scroll
    navLink.forEach(function (item) {
      if ((item.style.color = "white")) {
        item.style.color = "var(--primary)";
      }
    });
  } else {
    if (display != "none") {
      navContact.style.display = "flex";
    } else {
      navContact.style.display = "none"
    }

    navItems.classList.remove("nav-sticky");
    menuBtn.style.color = "var(--white)";
    navLink.forEach(function (item) {
      item.style.color = "white";
    });
  }
});


// contact button on mobile
let contactBtn = document.querySelector('.con-btn');
let contactInfo = document.querySelector('.contact-popup-info');
let cancelBtn = contactInfo.querySelector('.cancel');

contactBtn.addEventListener('click', ()=>{
  contactInfo.style.display = "block";
  contactInfo.animate([
    {opacity: 0}, {opacity: 1}
  ], 
  {
    duration: 400,
  })
  
})

cancelBtn.addEventListener('click', ()=>{
  contactInfo.style.display = "none";
})
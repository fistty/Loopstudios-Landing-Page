const hamburger = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".nav-ul");
const navLink = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
const headerMain = document.querySelector(".header-main");
const html = document.querySelector("html");

function makeActive() {
  const ACTIVE = "active";
  hamburger.classList.toggle(ACTIVE);
  mobileMenu.classList.toggle(ACTIVE);
  body.classList.toggle(ACTIVE);
  headerMain.classList.toggle(ACTIVE);
  html.classList.toggle(ACTIVE);
}

function removeActive() {
  const ACTIVE = "active";
  hamburger.classList.remove(ACTIVE);
  mobileMenu.classList.remove(ACTIVE);
  body.classList.remove(ACTIVE);
  headerMain.classList.remove(ACTIVE);
  html.classList.remove(ACTIVE);
}

hamburger.addEventListener("click", makeActive);
navLink.forEach(element => {
  element.addEventListener("click", removeActive);
});

// SCROLL IN ANIMATION
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach(element => observer.observe(element));

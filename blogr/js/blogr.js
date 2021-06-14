const hamburger = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-list');
const dropdownLinks = document.querySelectorAll('.dropdown');

let menuOpen = false;

console.log(hamburger);
console.log(nav);
console.log(dropdownLinks);

function isMenuOpen() {
  if (!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
    nav.classList.add('show');
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
    nav.classList.remove('show');
  }
}

hamburger.addEventListener('click', isMenuOpen);

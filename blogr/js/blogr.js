const hamburger = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-list');
const dropdownLinks = document.querySelectorAll('.top-lvl-link');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

let menuOpen = false;
let dropdownOpen = false;

console.log(hamburger);
console.log(nav);
console.log(dropdownLinks);
console.log(dropdownMenus);

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

function handleDropDown(e) {
  if (!dropdownOpen) {
    e.target.children[0].firstElementChild.classList.add('open');
    e.target.children[1].classList.add('show')
    dropdownOpen = true;
    console.log(e);
  } else {
    e.target.children[0].firstElementChild.classList.remove('open');
    e.target.children[1].classList.remove('show')
    dropdownOpen = false;
    console.log(e);
  }

}

hamburger.addEventListener('click', isMenuOpen);
dropdownLinks.forEach(link => {
  link.addEventListener('click', handleDropDown);
})
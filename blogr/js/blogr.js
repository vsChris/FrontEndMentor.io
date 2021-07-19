const hamburger = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-list');
const dropdownLinks = document.querySelectorAll('.top-lvl-link');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const carets = document.querySelectorAll('.caret');

let menuOpen = false;

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

function closeOpenSub () {
  dropdownMenus.forEach(subMenu => {
    if(subMenu.classList.contains('show')) {
      subMenu.classList.remove('show')
    }
  })
  carets.forEach(caret => {
    if(caret.classList.contains('open')) {
      caret.classList.remove('open');
    }
  }) 
}

function handleDropDown(e) {
    closeOpenSub();
    e.target.children[0].firstElementChild.classList.toggle('open');
    e.target.children[1].classList.toggle('show')
    dropdownOpen = true;
}

hamburger.addEventListener('click', isMenuOpen);

dropdownLinks.forEach(link => {
  link.addEventListener('click', handleDropDown);
})

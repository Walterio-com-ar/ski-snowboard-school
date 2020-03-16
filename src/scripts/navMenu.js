const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
  hamburger.classList.toggle('change');
  navMenu.classList.toggle('show');
}

hamburger.addEventListener('click', () => toggleMenu());
navMenu.addEventListener('click', () => toggleMenu());

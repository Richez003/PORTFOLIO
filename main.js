const openMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu ');

openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

const navLinks = document.querySelectorAll('.link');

function closeNavigation() {
  mobileMenu.style.display = 'none';
}

navLinks.forEach((link) => link.addEventListener('click', closeNavigation));

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

const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    featureImages: '',
    technologies: ['Rubby on rails', 'Css', 'Java script', 'Html'],
  },

  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    featureImages: '',
    technologies: ['Rubby on rails', 'Css', 'Java script', 'Html'],

  },

  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    featureImages: '',
    technologies: ['Rubby on rails', 'Css', 'Java script', 'Html'],

  },

  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    featureImages: '',
    technologies: ['Rubby on rails', 'Css', 'Java script', 'Html'],

  },

  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    featureImages: '',
    technologies: ['Rubby on rails', 'Css', 'Java script', 'Html'],

  },

  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    featureImages: '',
    technologies: ['Rubby on rails', 'Css', 'Java script', 'Html'],

  },
];

const projectCards = document.getElementById('cards1');
projectCards.innerHTML = projects.map(((project) => `
<div class="container-card">
<div class="placeholder">         
</div>
<div class="card-lists">
    <div><h3>${project.name}</h3></div>
    <div class="items">
    <ul>
        <li>${project.technologies[0]}</li>
        <li>${project.technologies[1]}</li>
        <li>${project.technologies[2]}</li>
        <li>${project.technologies[3]}</li>
    </ul>
</div>
<div class="button-cont">
    <button type="button" class="potfolio-but">See Project</button>
</div>

</div>
</div>
`)).join('');

const openMenu2 = document.querySelectorAll('.potfolio-but');
const closeMe = document.querySelectorAll('.closepopup');
const popUp = document.querySelector('.popup');

openMenu2.forEach((link) => link.addEventListener('click', () => {
  popUp.style.display = 'flex';
}));

closeMe.forEach((link) => link.addEventListener('click', () => {
  popUp.style.display = 'none';
}));

const openMenu3 = document.querySelectorAll('.potfolio-but');
const closeMe2 = document.querySelectorAll('.closeMobile');
const popUp1 = document.querySelector('.mobilePop');

openMenu3.forEach((link) => link.addEventListener('click', () => {
  popUp1.style.display = 'flex';
}));

closeMe2.forEach((link) => link.addEventListener('click', () => {
  popUp1.style.display = 'none';
}));

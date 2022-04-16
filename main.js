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

function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function scroller() {
    window.scrollTo(scrollLeft, scrollTop);
  };

// const email = document.getElementById('email');
// const form = document.getElementById('form-style');
// const displayMsg = document.getElementById('#form-message-error');
// displayMsg.innerHTML = 'Your email address should be in lowercase';
// form.addEventListener('submit', (event) => {
//   if (email.value !== email.value.toLowerCase()) {
//     event.preventDefault();
//     displayMsg.style.visibility = 'visible';
//     displayMsg.classList.add('error-msg');
//     setTimeout(() => {
//       displayMsg.style.visibility = 'hidden';
//     }, 3000);
//   } else {
//     displayMsg.style.visibility = 'hidden';
//   }
// });

const contactForm = document.querySelector('.form-style');
const emailInput = document.querySelector('.email');
const validationMessage = document.querySelector('.error');
contactForm.addEventListener('submit', (event) => {
  const strInput = emailInput.value;
  if (/[A-Z]/.test(strInput)) {
    validationMessage.innerHTML = 'Your email address should not contain upper case letters';
    validationMessage.classList.add('shake');
    event.preventDefault();
  }
});

const firstName = document.getElementById('name1');
const lastName = document.getElementById('name2');
const messageInput = document.getElementById('message');
 
function checkLocalStorage() {
    const values = localStorage.getItem('input');

    let input = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',};

    if (values) {
      input = JSON.parse(values);
     firstName.value = input.name1;
      lastName.value = input.name2;
      emailInput.value = input.email;
      messageInput.value = input.message;

    } else {
      localStorage.setItem('input', JSON.stringify(input));
    }
  }
  function updateLocalStorage(e) {
    input = { ...input, [e.target.name]: e.target.value };
    const serialized = JSON.stringify(input);
    localStorage.setItem('input', serialized);
  }
}

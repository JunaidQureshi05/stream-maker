const navbar = document.querySelector('.header');
const menu = document.querySelector('.nav');
const hamburger = document.querySelector('.fa-bars');
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

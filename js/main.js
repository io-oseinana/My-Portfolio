const btn = document.querySelector('#btn');
const toggler = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav');
const revLogo = document.querySelector('.rev-logo');
const navLink = document.querySelectorAll('.nav-link');

btn.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('open');
  revLogo.classList.toggle('active');
});

navLink.forEach((btnLink) => {
  btnLink.addEventListener('click', () => {
    toggler.classList.remove('active');
    menu.classList.remove('open');
    revLogo.classList.remove('active');
  });
});

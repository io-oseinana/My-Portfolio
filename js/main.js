const btn = document.querySelector('#btn'),
    toggler = document.querySelector('.nav-toggle'),
    menu = document.querySelector('.nav'),
    hamburger = document.querySelector('.hamburger'),
    revLogo = document.querySelector('.rev-logo'),
    navLink = document.querySelectorAll('.nav-link');

btn.addEventListener('click', () => {
    toggler.classList.toggle('active');
    menu.classList.toggle('open')
    revLogo.classList.toggle('active')
})

navLink.forEach(btnLink => {
    btnLink.addEventListener('click', () => {
        toggler.classList.remove('active')
        menu.classList.remove('open')
        revLogo.classList.remove('active')
    })
})

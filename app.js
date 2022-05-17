const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');


//Loigc to toggle the "hamburger" menu in the mobile view
const mobileMenuToggle = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('mobile-view');
    navbar.classList.toggle('navbar-mobile');
    }


    menu.addEventListener('click', mobileMenuToggle);
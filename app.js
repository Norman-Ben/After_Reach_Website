const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


//Loigc to toggle the "hamburger" menu in the mobile view
const mobileMenuToggle = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('mobile-view');
    }


    menu.addEventListener('click', mobileMenuToggle);
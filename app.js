const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');
const navLogo = document.querySelector('#navbar__logo');

//Logic to toggle the "hamburger" menu in the mobile view
const mobileMenuToggle = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('mobile-view');
  navbar.classList.toggle('navbar-mobile');
};

menu.addEventListener('click', mobileMenuToggle);

//Logic to call Strapi API to fetch the tourdate data and populate the tourdates list

fetch('http://localhost:1337/api/tourdate')
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('.tourdates').innerHTML =
      data.data.attributes.ListOfShows;
  })
  .catch((error) => console.log(error));

//Logic for smooth scrolling between sections

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const newsMenu = document.querySelector('#news-page');
  const musicMenu = document.querySelector('#music-page');
  const aboutMenu = document.querySelector('#aboutus-page');
  const tourMenu = document.querySelector('#tour-page');
  let scrollPos = window.scrollY;
  //console.log(scrollPos); //<-- find the scroll position of the page

  // adds 'highlight' class to my menu items

  if (window.innerWidth > 960 && scrollPos < 227) {
    newsMenu.classList.add('highlight');
    musicMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    musicMenu.classList.add('highlight');
    newsMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2200) {
    musicMenu.classList.remove('highlight');
    aboutMenu.classList.add('highlight');
    tourMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2525) {
    aboutMenu.classList.remove('highlight');
    tourMenu.classList.add('highlight');
    return;
  }

  if ((elem && window.innerWidth < 960) || (elem && scrollPos > 600)) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a menu item

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth < 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('mobile-view');
    navbar.classList.remove('navbar-mobile');
  }
};
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

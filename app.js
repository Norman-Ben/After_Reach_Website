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

//Logic to call Strapi API to fetch the tourdate data and populate the tourdates list and about section

fetch('https://young-temple-47213.herokuapp.com/api/tourdate')
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('.tourdates').innerHTML =
      data.data.attributes.ListOfShows;
  })
  .catch((error) => console.log(error));

fetch('https://young-temple-47213.herokuapp.com/api/about')
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('.about__body').innerHTML =
      data.data.attributes.aboutText;
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

  if (window.innerWidth > 960 && scrollPos < 700) {
    aboutMenu.classList.add('highlight');
    newsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1100) {
    newsMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    musicMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1800) {
    newsMenu.classList.remove('highlight');
    musicMenu.classList.add('highlight');
    tourMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
    musicMenu.classList.remove('highlight');
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

//Logic to toggle light and dark mode

function changeTheme() {
  const root = document.documentElement;
  const arLogo = document.querySelector('.logo');
  const arEmblem = document.querySelector('.footer__emblem');
  const theme = root.className === 'dark-mode' ? 'light-mode' : 'dark-mode';
  root.className = theme;

  //Set logo and emblem colors for the selected theme
  if (theme === 'dark-mode') {
    arLogo.src =
      'https://res.cloudinary.com/ddwqntr2x/image/upload/v1655223408/White_AR_Text_-_No_Background_xcwbr7.png';
    arEmblem.src =
      'https://res.cloudinary.com/ddwqntr2x/image/upload/v1655223413/White_Emblem_-_No_Background_df9eix.png';
  } else {
    arLogo.src =
      'https://res.cloudinary.com/ddwqntr2x/image/upload/v1655223391/Black_AR_Text_-_No_Background_m4jdnz.png';
    arEmblem.src =
      'https://res.cloudinary.com/ddwqntr2x/image/upload/v1655223395/Black_Emblem_-_No_Background_vlwtoi.png';
  }
}

document.querySelector('.theme-toggle').addEventListener('click', changeTheme);

//Detect system theme preference and set the theme accordingly
function detectThemePreference() {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

  if (darkThemeMq.matches) {
    document.querySelector('.theme-switch').checked = true;
    changeTheme();
  } else {
    document.querySelector('.theme-switch').checked = false;
  }
}

detectThemePreference();

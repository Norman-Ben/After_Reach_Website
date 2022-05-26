const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');

//Loigc to toggle the "hamburger" menu in the mobile view
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

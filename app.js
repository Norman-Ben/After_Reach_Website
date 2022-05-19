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

//Logic for the image carousel

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});



//Logic to call Strapi API to fetch the tourdate data and populate the tourdates list

fetch('http://localhost:1337/api/tourdate')
.then(response => response.json())
.then(data => {
  document.querySelector('.tourdates').innerHTML = data.data.attributes.ListOfShows
})
.catch(error => console.log(error));


const burger = document.querySelector('.header_burger-link');
const menu = document.querySelector(".header_burger-body");
const close_burger = document.querySelector('.header_burger-close');

const link_menu = document.querySelectorAll('.header___menu .header__link');


const toggleBurger = () => {
  menu.classList.toggle('active');
}

burger.addEventListener('click', toggleBurger);
close_burger.addEventListener('click', toggleBurger);
link_menu.forEach(link => {
  link.addEventListener('click', toggleBurger)
});
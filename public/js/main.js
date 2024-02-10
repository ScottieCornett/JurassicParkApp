'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-dropdown');
const mobileLink = document.querySelectorAll('.link-item-mobile');
const navItemDesktop = document.querySelectorAll('.nav-item-desktop');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-selected');
});

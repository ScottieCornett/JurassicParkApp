'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-dropdown');
const mobileLink = document.querySelectorAll('.link-item-mobile');
const planEl = document.getElementById('plan-trip');
const planDropDown = document.querySelector('.plan-drop-down');
const navItemDesktop = document.querySelectorAll('.nav-item-desktop');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-selected');
});

planEl.addEventListener('mouseover', function () {
  planDropDown.classList.add('is-active');
});

planEl.addEventListener('mouseout', function () {
  planDropDown.classList.remove('is-active');
});

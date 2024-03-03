// 'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const temp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const mobileMenu = document.querySelector('.mobile-dropdown');
const mobileLink = document.querySelectorAll('.link-item-mobile');
const navItemDesktop = document.querySelectorAll('.nav-item-desktop');
const parkOpen = document.getElementById('parkOpen');
const basicBtn = document.getElementById('basic-btn');
const silverBtn = document.getElementById('silver-btn');
const goldBtn = document.getElementById('gold-btn');
const modal = document.querySelector('.modal');
const tickets = document.getElementById('tickets');
const total = document.getElementById('total');
const tripLength = document.getElementById('trip-length');
// const bookingBody = document.querySelector('.booking-body');
const closeModalBtn = document.querySelector('.close-modal');

const time = new Date().getHours();
parkOpen.textContent = time > 8 && time <= 19 ? 'Open' : 'Closed';
parkOpen.style.color = time > 8 && time <= 19 ? 'green' : 'red';

const closeModal = function () {
  modal.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
};

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-selected');
});

async function logWeather() {
  const response = await fetch(
    'https://api.weatherbit.io/v2.0/current?city=sanjose&country=CR&key=48150379d462498986a030f6269f0052&units=I'
  );
  const weather = await response.json();
  const temperature = weather.data[0].temp;
  temp.textContent = `${temperature} F`;
}

basicBtn.addEventListener('click', openModal);
silverBtn.addEventListener('click', openModal);
goldBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// window.addEventListener('load', logWeather);

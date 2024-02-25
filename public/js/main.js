// 'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const temp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const mobileMenu = document.querySelector('.mobile-dropdown');
const mobileLink = document.querySelectorAll('.link-item-mobile');
const navItemDesktop = document.querySelectorAll('.nav-item-desktop');
const parkOpen = document.getElementById('parkOpen');

const time = new Date().getHours();
parkOpen.textContent = time > 8 && time <= 19 ? 'Open' : 'Closed';
parkOpen.style.color = time > 8 && time <= 19 ? 'green' : 'red';

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

// window.addEventListener('load', logWeather);

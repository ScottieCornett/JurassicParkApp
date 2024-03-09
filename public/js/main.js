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
const modalBtn = document.getElementById('modal-btn');
// const bookingBody = document.querySelector('.booking-body');
const closeModalBtn = document.querySelector('.close-modal');
let ticketVal = 1;
let tripLengthVal = 1;
let tripSelection = '';

const time = new Date().getHours();
parkOpen.textContent = time > 8 && time <= 19 ? 'Open' : 'Closed';
parkOpen.style.color = time > 8 && time <= 19 ? 'green' : 'red';

window.addEventListener('load', logWeather);
window.addEventListener('scroll', () => {
  if (scrollY > 0) {
    menuToggle.style.opacity = 0;
  } else {
    menuToggle.style.opacity = 1;
  }
});

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  (scrollLeft = window.scrollX || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}
function enableScroll() {
  window.onscroll = function () {};
}
function resetOptions() {}

const closeModal = function () {
  modal.classList.add('hidden');
  location.reload();
  enableScroll();
};

const openModal = function () {
  document.documentElement.scrollTop = 0;
  modal.classList.remove('hidden');

  disableScroll();
};
menuToggle.addEventListener('click', () => {
  if (
    !(
      menuToggle.classList.contains('is-active') &&
      mobileMenu.classList.contains('is-selected')
    )
  ) {
    menuToggle.classList.add('is-active');
    mobileMenu.classList.add('is-selected');
    disableScroll();
  } else {
    menuToggle.classList.remove('is-active');
    mobileMenu.classList.remove('is-selected');
    enableScroll();
  }
  // menuToggle.classList.toggle('is-active');
  // mobileMenu.classList.toggle('is-selected');
  // disableScroll();
});

tickets.addEventListener('change', function () {
  ticketVal = parseFloat(this.value);
});
tripLength.addEventListener('change', function () {
  tripLengthVal = parseFloat(this.value);
});

async function logWeather() {
  const response = await fetch(
    'https://api.weatherbit.io/v2.0/current?city=sanjose&country=CR&key=48150379d462498986a030f6269f0052&units=I'
  );
  const weather = await response.json();
  const temperature = weather.data[0].temp;
  temp.textContent = `${temperature} F`;
}

basicBtn.addEventListener('click', () => {
  openModal();
  tripSelection = 'basic';
});
silverBtn.addEventListener('click', () => {
  openModal();
  tripSelection = 'silver';
});
goldBtn.addEventListener('click', () => {
  openModal();
  tripSelection = 'gold';
});
modalBtn.addEventListener('click', getTicketValue);
closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
function getTicketValue() {
  let price = 0;
  switch (tripSelection) {
    case 'basic':
      price = 500;
      break;
    case 'silver':
      price = 1200;
      break;
    case 'gold':
      price = 5000;
      break;
    default:
      price = 0;
      break;
  }
  function calcPrice() {
    let answer = ticketVal * price * tripLengthVal;
    return answer;
  }
  let totalSale = calcPrice();

  total.textContent = totalSale;
}

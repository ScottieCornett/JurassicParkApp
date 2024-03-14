const closeFlashBtn = document.querySelector('.close-flash');
const flashError = document.querySelector('.flash-error');

closeFlashBtn.addEventListener('click', () => {
  flashError.classList.add('hidden');
});

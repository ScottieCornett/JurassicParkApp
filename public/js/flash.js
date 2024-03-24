const closeFlashBtn = document.querySelector('.close-flash');
const flashError = document.querySelector('.flash-error');
const flashSuccess = document.querySelector('.flash-success');

window.addEventListener('DOMContentLoaded', () => {
  if (!flashError.classList.contains('hidden')) {
    setTimeout(() => {
      flashError.classList.add('hidden');
    }, 2000);
  }
});

closeFlashBtn.addEventListener('click', () => {
  flashError.classList.add('hidden');
});

function closeSuccessFlash() {
  if (!flashSuccess.classList.contains('hidden')) {
    setTimeout(() => {
      flashSuccess.classList.add('hidden');
    }, 2000);
  }
}

closeSuccessFlash();
closeErrorFlash();

const menu = document.querySelector('#hamburger-menu');
const button = document.querySelector('#hamburger-button');
const cross = document.querySelector('#hamburger-cross');

button.addEventListener('click', function () {
  menu.classList.toggle('hidden');
});

cross.addEventListener('click', function () {
  menu.classList.toggle('hidden');
});

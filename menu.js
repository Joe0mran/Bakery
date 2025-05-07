loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);

const images = [
  'back.jpg',
  'cc.jpg',
  'coffe.jpg',
  'croisson.jpg'
];

let current = 0;

window.addEventListener('DOMContentLoaded', () => {
  const bgDiv = document.getElementById('background');

  function changeBackground() {
    bgDiv.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 2000);
});

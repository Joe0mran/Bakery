loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);

const images = [
  '670c40b0-3e3e-405f-824d-19d840027923.jpg',
  'back.jpg',
  'cc.jpg',
  'coffe.jpg',
  'croisson.jpg'
];

let current = 0;

window.addEventListener('DOMContentLoaded', () => {
  const bgDiv = document.querySelector('background');

  function changeBackground() {
    bgDiv.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
    }, 500);
  }

  changeBackground();
  setInterval(changeBackground, 2000);
});

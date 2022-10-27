const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// #000000
// hex color contains 6 letters including #
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexValue = '#';
  for (let i = 0; i < 6; i++) {
    hexValue += hex[getRandomValue()];
  }
  document.body.style.background = hexValue;
  color.textContent = hexValue;
  color.style.color = hexValue;
});

const getRandomValue = () => {
  return Math.floor(Math.random() * hex.length);
};

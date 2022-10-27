const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomValue = getRandomNumber();
  console.log(randomValue);

  document.body.style.background = colors[randomValue];
  color.textContent = colors[randomValue];
  color.style.color = colors[randomValue];
});
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

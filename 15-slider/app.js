const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index) => {
  console.log(index * 100);
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

nextBtn.addEventListener('click', () => {
  counter++;
  slideFunction();
});

prevBtn.addEventListener('click', () => {
  counter--;
  slideFunction();
});

let slideFunction = () => {
  // working with slides
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // if (counter === slides.length) {
  //   counter = 0;
  // }

  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }

  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

prevBtn.style.display = 'none';

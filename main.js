const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth * 3; // Ширина трех слайдов
const totalSlides = slides.length;
let currentIndex = 0;

const counter = document.querySelector('.counter');

updateCounter();
updateButtons();

nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 3, totalSlides - 3);
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 3, 0);
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * slideWidth / 3;
  carousel.style.transform = `translateX(${offset}px)`;
  updateCounter();
  updateButtons();
};

function updateButtons() {
  if (currentIndex === 0) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  };

  if (currentIndex >= totalSlides - 3) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  };
};

function updateCounter() {
  const startSlide = currentIndex === 0 ? 3 : currentIndex + 3;
  const endSlide = Math.min(currentIndex + 3, totalSlides);
  counter.textContent = `${startSlide}/${totalSlides}`;
};
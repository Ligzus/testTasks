const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth * 3;
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

// МОБИЛЬНЫЕ КАРУСЕЛИ:

let ourCurrentSlide = 0; // Используем индексацию с 0
const ourTotalSlides = document.querySelectorAll('.stages__mobile').length; // Получаем общее количество слайдов

function showOurSlide(n) {
    const slides = document.querySelectorAll('.stages__mobile'); // Получаем все слайды
    slides.forEach(slide => slide.classList.remove('active')); // Удаляем класс 'active' у всех слайдов
    slides[n].classList.add('active'); // Добавляем класс 'active' текущему слайду
    ourCurrentSlide = n; // Обновляем текущий слайд
    updateOurButtons(); // Обновляем состояние кнопок
}

function nextOurSlide() {
    if (ourCurrentSlide < ourTotalSlides - 1) { // Проверяем, есть ли следующий слайд
        showOurSlide(ourCurrentSlide + 1); // Показываем следующий слайд
    }
}

function prevOurSlide() {
    if (ourCurrentSlide > 0) { // Проверяем, есть ли предыдущий слайд
        showOurSlide(ourCurrentSlide - 1); // Показываем предыдущий слайд
    }
}

function updateOurButtons() {
    const prevBtn = document.getElementById('prevBtnStage');
    const nextBtn = document.getElementById('nextBtnStage');
    prevBtn.disabled = ourCurrentSlide === 0; // Отключаем кнопку "предыдущий", если текущий слайд первый
    nextBtn.disabled = ourCurrentSlide === ourTotalSlides - 1; // Отключаем кнопку "следующий", если текущий слайд последний
}

showOurSlide(ourCurrentSlide); // Показываем начальный слайд

document.getElementById('prevBtnStage').addEventListener('click', prevOurSlide); // Добавляем обработчик события для кнопки "предыдущий"
document.getElementById('nextBtnStage').addEventListener('click', nextOurSlide); // Добавляем обработчик события для кнопки "следующий"

// МОБИЛЬНАЯ КАРУСЕЛЬ2:


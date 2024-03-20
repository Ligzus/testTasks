// Мобильная карусель "Участники..."
const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

const counter = document.querySelector('.counter');

updateCounter();
updateButtons();

nextButton.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -currentIndex * slides[0].offsetWidth;
  carousel.style.transform = `translateX(${offset}px)`;
  updateCounter();
  updateButtons();
}

function updateButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === totalSlides - 1;
}

function updateCounter() {
  counter.textContent = `${currentIndex + 1}/${totalSlides}`;
}

// Еще мобилльные карусели "Этапы...":

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

const carouselDotsContainer = document.querySelector('.carousel-dots');

// Создаем точки для каждого слайда
for (let i = 0; i < ourTotalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === ourCurrentSlide) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        showOurSlide(i);
    });
    carouselDotsContainer.appendChild(dot);
}

// Функция для обновления активной точки
function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === ourCurrentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Обновляем точки при переключении слайдов
function showOurSlide(n) {
    const slides = document.querySelectorAll('.stages__mobile');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
    ourCurrentSlide = n;
    updateOurButtons();
    updateDots(); // Обновляем точки
}
let index = 0;
const slides = document.querySelectorAll('.slider-wrapper .slide');
const totalSlides = slides.length;

function showSlide(n) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.transform = `translateX(-${n * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

showSlide(index);
setInterval(nextSlide, 5000); // Muda de imagem a cada 5 segundos

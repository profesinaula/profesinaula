let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.getElementById('slides');
    const totalSlides = document.querySelectorAll('.slides img').length;

    // Calculamos el siguiente índice
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Movemos el contenedor de las imágenes
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Movimiento automático cada 5 segundos
setInterval(() => {
    moveSlide(1);
}, 5000);

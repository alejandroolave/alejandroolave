// Seleccionar todos los elementos del carrusel
const carouselItems = document.querySelectorAll('.carousel-item');

// Función para animar el carrusel
function animateCarousel() {
  // Mover el primer elemento al final del carrusel con una animación suave
  const firstItem = document.querySelector('.carousel-item');
  firstItem.style.transition = 'transform 1s ease-in-out';
  firstItem.style.transform = 'translateX(-100%)'; // Mover el primer elemento fuera del carrusel
}

// Intervalo de tiempo para la animación automática (en milisegundos)
const interval = 1000; // 3 segundos

// Iniciar la animación automática del carrusel
let carouselInterval = setInterval(animateCarousel, interval);

// Detener la animación al pasar el mouse sobre una imagen
carouselItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval); // Detener la animación
  });

  item.addEventListener('mouseleave', () => {
    // Reanudar la animación después de salir del mouse
    carouselInterval = setInterval(animateCarousel, interval);
  });
});

// Detectar el final de la animación de transición
carouselItems.forEach(item => {
  item.addEventListener('transitionend', () => {
    // Mover el primer elemento al final del carrusel sin animación
    const firstItem = document.querySelector('.carousel-item');
    firstItem.style.transition = 'none';
    firstItem.style.transform = 'translateX(0)'; // Volver a colocar el primer elemento al principio del carrusel
    firstItem.parentElement.appendChild(firstItem); // Mover el primer elemento al final del carrusel
  });
});

// Detener la animación al pasar el mouse sobre una imagen
carouselItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.animationPlayState = 'paused'; // Detener la animación
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.animationPlayState = 'running'; // Reanudar la animación
    });
  });
  
const starRating = document.getElementById('star-rating');
const scoreDisplay = document.getElementById('score');
const scoreInput = document.getElementById('score-input');

starRating.addEventListener('click', function(e) {
    const mouseX = e.clientX - starRating.getBoundingClientRect().left;
    const starWidth = starRating.offsetWidth / 5; // 5 estrellas

    const score = Math.ceil(mouseX / starWidth);

    starRating.setAttribute('data-rating', score);
    scoreDisplay.innerText = score;

    // Actualizar las estrellas visuales
    updateStars(score);

    // Actualizar el campo de entrada
    scoreInput.value = score;
});

scoreInput.addEventListener('input', function() {
    const score = parseInt(scoreInput.value) || 0;

    // Asegurar que el puntaje esté en el rango de 0 a 5
    const clampedScore = Math.max(0, Math.min(score, 5));

    starRating.setAttribute('data-rating', clampedScore);
    scoreDisplay.innerText = clampedScore;

    // Actualizar las estrellas visuales
    updateStars(clampedScore);
});

function updateStars(score) {
    const stars = "★".repeat(score) + "☆".repeat(5 - score);
    starRating.innerHTML = stars;
}
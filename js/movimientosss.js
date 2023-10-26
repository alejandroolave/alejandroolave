const character = document.getElementById('character');
const moveButton = document.getElementById('moveButton');
let movingRight = true;

moveButton.addEventListener('click', () => {
    if (movingRight) {
        character.style.transform = 'translateX(100%)';
    } else {
        character.style.transform = 'translateX(0)';
    }
    movingRight = !movingRight;
});

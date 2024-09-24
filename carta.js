// Animação dos corações
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Abrir carta ao passar o mouse
const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');
const closedLetter = document.querySelector('.closed-letter');

envelope.addEventListener('mouseenter', () => {
    closedLetter.style.display = 'none';
    letter.style.display = 'block';
});

envelope.addEventListener('mouseleave', () => {
    closedLetter.style.display = 'block';
    letter.style.display = 'none';
});

const btn = document.querySelector('.define-btn');
const circle = document.querySelector('.circle');

btn.addEventListener('click', roll);

function roll() {
    btn.classList.toggle('active');
    circle.classList.toggle('active');
}
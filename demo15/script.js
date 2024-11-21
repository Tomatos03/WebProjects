const solides = document.querySelectorAll('.slide');
const left_btn = document.querySelector('.left-btn');
const right_btn = document.querySelector('.right-btn');
const body = document.querySelector('body');
let curSlideIndex = 0;

left_btn.addEventListener('click', nextSlide);
right_btn.addEventListener('click', prevSlide);

function updateBodyImage() {
    body.style.backgroundImage = solides[curSlideIndex].style.backgroundImage;
}

function nextSlide() {
    solides[curSlideIndex].classList.remove('active');
    curSlideIndex = (curSlideIndex + 1) % solides.length;
    solides[curSlideIndex].classList.add('active');
    updateBodyImage();
}

function prevSlide() {
    solides[curSlideIndex].classList.remove('active');
    curSlideIndex = (curSlideIndex - 1 + solides.length) % solides.length;
    solides[curSlideIndex].classList.add('active');
    updateBodyImage();
}
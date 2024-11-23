const slide_container = document.querySelector('.slide-container');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

const width = 500;
const mx = document.querySelectorAll('img').length;
let curSlideIndex = 0;

let interval = setInterval(() => {
    nextSlide();
}, 1500);


prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        nextSlide();
    }, 1500);
}

function nextSlide() {
    curSlideIndex = (curSlideIndex + 1) % mx;
    slide_container.style.transform = `translateX(-${width * curSlideIndex}px)`;
    resetInterval();
}

function prevSlide() {
    curSlideIndex = (curSlideIndex - 1 + mx) % mx;
    slide_container.style.transform = `translateX(-${width * curSlideIndex}px)`;
    resetInterval();
}
const up_btn = document.querySelector('.up-btn');
const down_btn = document.querySelector('.down-btn');
const l_wrapper = document.querySelector('.slider_lcontainer .wrapper');
const r_wrapper = document.querySelector('.slider_rcontainer .wrapper');

const SLIDE_NUMBER = 4;

let curSlideIndex = 0;

up_btn.addEventListener('click', nextSlide);
down_btn.addEventListener('click', nextSlide);

function nextSlide() {
    curSlideIndex = (curSlideIndex + 1) % SLIDE_NUMBER;
    l_wrapper.style.transform = `translateY(${-curSlideIndex * 100}%)`;
    r_wrapper.style.transform = `translateY(${-(SLIDE_NUMBER - curSlideIndex - 1) * 100}%)`;
}
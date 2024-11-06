const btns = document.querySelectorAll('button');
const circles = document.querySelectorAll('.circle');

const totalWidth = document.querySelector('.circles').clientWidth;
const bar = document.getElementById('progress-bar');

var count = 1;
const prevBtn = btns[0];
const nextBtn = btns[1];
const total = circles.length;
const width = circles[0].offsetWidth;
const dx = (totalWidth - total * width) / (total - 1);

nextBtn.addEventListener('click', () => {
    const actives = document.querySelectorAll('.active');
    if(count != total) {
        setCircleActive();
        update();
    }
    if(count == total - 1) {
        setNextBtnNoActive();
    }
    if(count == 1) {
        setPrevBtnActive();
    }
    if(count < total) ++count;
    update();
});

prevBtn.addEventListener('click', () => {
    if(count == 2) {
        setPrevBtnNoActive();
    }
    if(count > 1) {
        setCircleNoActive();
    }
    if(count == total) {
        setNextBtnActive();
    }
    if(count > 1) count--;
    update();
});

function update() {
    bar.style.width = count * width + (count - 1) * dx + 'px';
}

function setCircleActive() {
    circles[count].classList.add("active");
}

function setCircleNoActive() {
    circles[count - 1].classList.remove("active");
}

function setNextBtnNoActive() {
    nextBtn.classList.remove("active-btn");
}

function setNextBtnActive() {
    nextBtn.classList.add("active-btn");
}

function setPrevBtnActive() {
    prevBtn.classList.add("active-btn");
}

function setPrevBtnNoActive() {
    prevBtn.classList.remove("active-btn");
}

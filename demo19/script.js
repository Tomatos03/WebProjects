const slide_container = document.querySelector('.slide-container');
const items = document.querySelectorAll('.item-container .item');
const items0 = document.querySelectorAll('.quick-nav .item');
const lis = document.querySelectorAll('.top-nav li');
const mx = document.querySelectorAll('.slide').length;


let curSlideIndex = 0;
let interval = setInterval(() => {
    nextSlide();
}, 1500);


lis.forEach((li, index) => {
    li.addEventListener('click', () => addUnderline(index));
});


items.forEach(item => {
    item.addEventListener('mouseover', () => moveUp(item.children[0]));
    item.addEventListener('mouseout', () => resetMoveUp(item.children[0]));
    item.addEventListener('mousedown', () => moveScale(item.children[0]));
    item.addEventListener('mouseup', () => resetMoveScale(item.children[0]));
});

items0.forEach(item => {
    item.addEventListener('mouseover', () => moveUp(item.children[0]));
    item.addEventListener('mouseout', () => resetMoveUp(item.children[0]));
});

function addUnderline(index) {
    const n = lis.length;
    for(let i = 0; i < n; ++i) {
        if(i == index) {
            lis[i].classList.add('active');
        } else {
            lis[i].classList.remove('active');
        }
    }
}

function moveScale(img) {
    img.classList.add("move-up-scale");
}

function resetMoveScale(img) {
    img.classList.remove("move-up-scale");
}

function moveUp(img) {
    img.classList.add("move-up");
}

function resetMoveUp(img) {
    img.classList.remove("move-up");
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        nextSlide();
    }, 1500);
}

function nextSlide() {
    const width = document.querySelector('.slide-container').offsetWidth;
    curSlideIndex = (curSlideIndex + 1) % mx;
    slide_container.style.transform = `translateX(-${width * curSlideIndex}px)`;
    resetInterval();
}

function prevSlide() {
    const width = document.querySelector('.slide-container').offsetWidth;
    curSlideIndex = (curSlideIndex - 1 + mx) % mx;
    slide_container.style.transform = `translateX(-${width * curSlideIndex}px)`;
    resetInterval();
}
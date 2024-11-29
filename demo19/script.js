const items = document.querySelectorAll('.item-container .item');
const items0 = document.querySelectorAll('.quick-nav .item');
const items1 = document.querySelectorAll('.bottom-nav .item');
const slides = document.querySelectorAll('slide');
const lis = document.querySelectorAll('.top-nav li');

const container = document.querySelector('.container');
const dot_container =document.querySelector('.dots');
const top_nav_l_btn = document.querySelector('.header .l-btn');
const sider = document.querySelector('.side');
const overlayer = document.querySelector('#overlay');

let slide_container = document.querySelector('.slide-container');
let slideWidth = slide_container.offsetWidth;
const slide_number = slide_container.children.length;

let curSlideIndex = 0;
let isShowSide = false;
let isResizing = false; 
let isSliding = false;
let isBanSlide = false;
let autoSlideInterval = - 1;
let resizeTimeout;


// 先初始化dot,在获取dot
initDots();
const dots = document.querySelectorAll('.dot');
startAutoSlide();

top_nav_l_btn.addEventListener('click',showSide);

// tmp
overlayer.addEventListener('click', showSide);


slide_container.addEventListener("transitionend", () => {
    // if(isResizing) {
        // fixOffset();
    //     startAutoSlide();
    // }
    // isSliding = false;
});

window.addEventListener('resize', () => {
    stopAutoSlide();
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        fixOffset();
        startAutoSlide();
    }, 200);
});

// window.addEventListener('resize', () => {
//     if (isSliding || isShowSide) return;

//     isResizing = true;
//     clearTimeout(resizeTimeout);

//     fixOffset();

//     // 设置延时，以确保页面渲染完成再重新启动自动轮播
//     resizeTimeout = setTimeout(() => {
//         // 启动自动轮播
//         startAutoSlide();
//         isResizing = false;
//     }, 200);
// });

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

items1.forEach((item, index) => {
    item.addEventListener('click', () => addSelectState(index));
});


function startAutoSlide(){
    if(autoSlideInterval != -1) return;

    autoSlideInterval = setInterval(() =>{
        nextSlide();
        alterDots();
    }, 1500);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = -1;
}


function showSide() {
    isShowSide = !isShowSide;
    if(isShowSide) {
        stopAutoSlide();
        overlayer.classList.add('overlay');
        sider.style.transform = "translateX(0px)";
        container.style.transform = `translateX(${sider.offsetWidth}px)`; 
    } else {
        startAutoSlide();
        overlayer.classList.remove('overlay');
        sider.style.transform = "translateX(-100%)";
        container.style.transform = `translateX(0px)`;
    }
}


function initDots() {
    for(let i = 0; i < slide_number; ++i) {
        dot_container.innerHTML += `<li class="dot ${i == 0 ? 'active' : ''}"></li>`;
    }
}

function alterDots() {
    for(let i = 0; i < slide_number; ++i) {
        if(i == curSlideIndex) {
            dots[i].classList.add('active');
        } else {
            dots[i].classList.remove('active');
        }
    }
}

function addSelectState(index) {
    const n = items1.length;
    for(let i = 0; i < n; ++i) {
        if(i == index) {
            items1[i].classList.add('active');
        } else {
            items1[i].classList.remove('active');
        }
    }
}

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
    // clearInterval(interval);
    // startAutoSlide();
}

function fixOffset() {
    slideWidth = document.querySelector('.slide-container').offsetWidth;

    slide_container.style.transform = `translatex(-${slideWidth * curSlideIndex}px)`;
}



function nextSlide() {
    // if(isResizing) return;
    isSliding = true;
    curSlideIndex = (curSlideIndex + 1) % slide_number
    slide_container.style.transform = `translateX(-${slideWidth * curSlideIndex}px)`;
}

function prevSlide() {
    isSliding = true;
    curSlideIndex = (curSlideIndex - 1 + slide_number) % slide_number;
    slide_container.style.transform = `translateX(-${slideWidth * curSlideIndex}px)`;
}
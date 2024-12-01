const HIDE_SIDER = 0;
const SHOW_SIDER = 1;

const items = document.querySelectorAll('.item-container .item');
const items0 = document.querySelectorAll('.quick-nav .item');
const items1 = document.querySelectorAll('.bottom-nav .item');
const options = document.querySelectorAll('.top-nav .option');

const overlay = document.querySelector('.overlay');
const sider = document.querySelector('.sider');
const container = document.querySelector('.container');
const top_nav = document.querySelector('.top-nav');
const bottom_nav = document.querySelector('.bottom-nav');
const top_nav_l_btn = document.querySelector('.top-nav .l-btn');

let siderStatus = HIDE_SIDER;


top_nav_l_btn.addEventListener('click', showOrHideSide);

// tmp
overlay.addEventListener('click', showOrHideSide);

options.forEach((option, index) => {
    option.addEventListener('click', () => addUnderline(index));
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

function showOrHideSide() {
    if(siderStatus === HIDE_SIDER) {
        siderStatus = SHOW_SIDER;
        overlay.classList.add('active');

        sider.classList.add('active');
        container.classList.add('active');
        bottom_nav.classList.add('active');
        top_nav.classList.add('active');
    } else {
        siderStatus = HIDE_SIDER;
        overlay.classList.remove('active');

        sider.classList.remove('active');
        container.classList.remove('active');
        bottom_nav.classList.remove('active');
        top_nav.classList.remove('active');
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
    const n = options
.length;
    for(let i = 0; i < n; ++i) {
        if(i == index) {
            options
        [i].classList.add('active');
        } else {
            options
        [i].classList.remove('active');
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
const more_btn = document.querySelector('.circle-container .more');
const close_btn = document.querySelector('.circle-container .close');
const container = document.querySelector('.container');
const circle_container = document.querySelector('.circle-container');
const side_nav = document.querySelector('.side-nav');

more_btn.addEventListener('click', rotateContent);
close_btn.addEventListener('click', restoreRotate);


function showOrHideSideNav() {
    side_nav.classList.toggle('active');
}

function swithBtnStatus() {
    circle_container.classList.toggle('active');
}

function rotateContent() {
    container.classList.toggle('active');
    swithBtnStatus();
    showOrHideSideNav();
}

function restoreRotate() {
    rotateContent();
}
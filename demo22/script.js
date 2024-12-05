const nav = document.querySelector('.nav');

window.addEventListener('scroll', changeNav);


function changeNav() {
    const posY = window.scrollY;
    const threshold = window.innerHeight * 0.1;
    if(posY > threshold) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}
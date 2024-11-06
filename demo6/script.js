const left = document.querySelector('.panel-left');
const right = document.querySelector('.panel-right');

left.addEventListener('mouseover', () => {
    left.style.width = '75%';
    right.style.width = '25%';
});

left.addEventListener('mouseout', () => {
    left.style.width = '50%';
    right.style.width = '50%';
});


right.addEventListener('mouseover', () => {
    right.style.width = '75%';
    left.style.width = '25%';
});

right.addEventListener('mouseout', () => {
    left.style.width = '50%';
    right.style.width = '50%';
});

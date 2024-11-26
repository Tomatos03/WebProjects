const text = 'We Love Programming!';
const h1 = document.querySelector('h1');
const control = document.querySelector('#speed');
let speed = 400;
let id = 1;

writeText();

function writeText() {
    const sub = text.slice(0, id);
    id = (id - 1) % text.length + 2; // [1, text.length]
    h1.textContent = sub;
    setTimeout(writeText, speed);
}

control.addEventListener('input', (e) => speed = 400 / e.target.value)
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => clickAnimate(e));

function clickAnimate(e) {
    const x = e.clientX;
    const y = e.clientY;

    const rect = e.target.getBoundingClientRect();
    const dx = x - rect.left;
    const dy = y - rect.top;
    console.log(dx);
    console.log(dy);

    const span = document.createElement('span');
    span.style.left = `${dx}px`;
    span.style.top = `${dy}px`;
    span.classList.add('circle');
    btn.appendChild(span);

    setTimeout(() => btn.removeChild(span), 500);
}
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const text = document.querySelector('input');
    text.classList.toggle('no-active');
});

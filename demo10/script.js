const btns = document.querySelectorAll("button");
const ps = document.querySelectorAll("p");

btns.forEach((btn) =>{
    btn.addEventListener('click', () => {
        btn.classList.toggle('btn-active');
        btn.nextElementSibling.classList.toggle('p-active');
        const parent = btn.parentElement.classList;
        parent.toggle('bk-active');
        parent.toggle('bk-active-op');
    });
});
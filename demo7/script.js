const email = document.querySelector('.in-email');
const password = document.querySelector('.in-password');
const time = 50;


function offset(spans, patten) {
    let n = spans.length;
    let i = 0;
    setInterval(() =>{
        if(i < n) {
            if(patten == 1) {
                spans[i].classList.add('recovery');
            } else {
                spans[i].classList.remove('recovery');
            }
            ++i;
        } else {
            clearInterval();
        }
    }, time);
};

function checkContainText(input) {
    console.log(input.value);
    return input.value !== '';
}



email.addEventListener('focus', () => {
    const spans = document.querySelectorAll('.email span');
    offset(spans, 1);
});

email.addEventListener('blur', () => {
    if(!checkContainText(email)) {
        const spans = document.querySelectorAll('.email span');
        offset(spans, 0);
    }
});


password.addEventListener('focus', () => {
    const spans = document.querySelectorAll('.password span');
    offset(spans, 1);
});

password.addEventListener('blur', () => {
    if(!checkContainText(password)) {
        const spans = document.querySelectorAll('.password span');
        offset(spans, 0);
    }
});

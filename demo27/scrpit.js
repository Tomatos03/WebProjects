const nums = document.querySelectorAll('.nums span');
const endContainer = document.querySelector('.end-container');
const countDownContainer = document.querySelector('.countdown');
const reset_btn = document.querySelector('.reset');

playAnimation();

reset_btn.addEventListener('click', resetDOM);


function resetDOM() {
    nums[0].classList.add('out');
    endContainer.classList.remove('visible');
    countDownContainer.classList.remove('hidden');
}

function playAnimation() {
    nums.forEach((num, index) => {
        num.addEventListener('animationend', (e) => {
            if(e.animationName == 'goIn' && num.nextElementSibling) {
                num.classList.remove('in');
                num.nextElementSibling.classList.add('out'); 
            } else if(e.animationName == 'goOut') {
                num.classList.remove('out');
                num.classList.add('in');
            } else {
                num.classList.remove('in');
                countDownContainer.classList.add('hidden');
                endContainer.classList.add('visible');
            }
        });
    });
}

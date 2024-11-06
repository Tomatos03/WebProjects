const boxs = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxs);

checkBoxs();

function checkBoxs(){
    const triggerMax = window.innerHeight * 8 / 10;
    
    boxs.forEach((box) => {
        const curPos  = box.getBoundingClientRect().top;

        if(curPos < triggerMax) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
const textarea = document.querySelector('.container textarea');
const span_container = document.querySelector('.span-container');

const END_NUMBER = 10;
const USE_INPUT_EVENT = 0;
const UNUSE_INPUT_EVENT = 1;
const ANIMATE_TIME = 200;


let isInputEvent = USE_INPUT_EVENT;

textarea.addEventListener('input', generateTag);
textarea.addEventListener('keydown', (e) => randomSelect(e));


function generateTag() {
    if(isInputEvent == UNUSE_INPUT_EVENT) return;

    let userInput = textarea.value;
    const contents = userInput.split(',');

    let text = '';
    for(const content of contents) {
        if(content == ``) continue;

        text += `<span>${content}</span>`;
    }
    span_container.innerHTML = text;
}

function randomSelect(e) {
    if(e.key != 'Enter') return;
    console.log('success');

    const number = span_container.children.length;
    highlightTag(number, 0, 0);

    isInputEvent = UNUSE_INPUT_EVENT;
    // 确保回车符号一同被清空
    setTimeout(() => textarea.value = '', 0);
    // 确保改变textarea.value时，isInputEvent = UNUSE_INPUT_EVENT
    setTimeout(() => isInputEvent = USE_INPUT_EVENT, 0);
}

function highlightTag(number, preTag, executeNumber) {
    if(executeNumber == END_NUMBER) return;

    try{
        span_container.children[preTag].classList.remove('active');
        // [0, number)
        const random = Math.floor(Math.random() * number);
        span_container.children[random].classList.add('active');
        setTimeout(() => highlightTag(number, random, executeNumber + 1), ANIMATE_TIME);
    } catch (userModifyTextArea) {
        return;
    }
}
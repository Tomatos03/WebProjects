const btn_add = document.querySelector('.btn-add');
const note_container = document.querySelector('.note-container');

btn_add.addEventListener('click', () => addItem());

initLocalStoreNote();

function addItem(content='') {
    const note = document.createElement('div');
    note.classList.add('item');
    note.innerHTML += `
        <div class="header">
            <button class="btn-edit"></button>
            <button class="btn-delete"></button>
        </div>
    `;

    const textAreaDom = document.createElement('textarea');
    textAreaDom.value = content;
    note.appendChild(textAreaDom);

    textAreaDom.addEventListener('input', () => updateLocalStore());

    note_container.appendChild(note);

    const btn_delete = note.querySelector('.btn-delete');
    btn_delete.addEventListener('click', () => {
        note_container.removeChild(note);
        updateLocalStore();
    });
}

function updateLocalStore() {
    const textAreas = document.querySelectorAll('textArea');
    const contents = [];
    textAreas.forEach((textArea) => {
        if(textArea.value){
            contents.push(textArea.value);
        } 
    });
    localStorage.setItem('contents', JSON.stringify(contents));
}

function initLocalStoreNote() {
    const contents = JSON.parse(localStorage.getItem('contents'));
    if(!contents) return;

    contents.forEach(content => addItem(content));
}
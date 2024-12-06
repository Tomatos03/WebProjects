const btn = document.querySelector('button');
const notice_container = document.querySelector('.notice_container');

// const NOTICE_HEIGHT = 60;
// const NOTICE_GAP = 10;

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
];

const types = ['info', 'success', 'error'];

btn.addEventListener('click', notification);

function notification() {
    const noticeNumber = document.querySelectorAll('.notice').length;

    const type = types[noticeNumber % 3];
    const message = messages[noticeNumber % 4];

    // 创建新的通知按钮
    const notice = document.createElement('div');
    notice.className = `notice ${type}`;
    notice.textContent = message;

    // 将通知按钮添加到页面中
    notice_container.appendChild(notice);
    setTimeout(() => notice_container.removeChild(notice), 5000);
}
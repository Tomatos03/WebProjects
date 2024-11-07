const btns = document.querySelector('.buttons');
const strs = ['applause', 'boo', 'gasp', 'victory', 'wrong'];
let preSong = '';

strs.forEach((str) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = str;

    btn.addEventListener('click', () => {
        stopPlayingSong();

        document.getElementById(str).play();
        preSong = str;
    });

    btns.appendChild(btn);
});

function stopPlayingSong() {
    if(preSong === '') return;

    const song = document.getElementById(preSong);
    song.pause();
    song.currentTime = 0;
}

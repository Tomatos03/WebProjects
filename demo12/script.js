const innner = document.querySelector('.inner');

window.addEventListener('keydown', (event) => {
    innner.innerHTML = `
        <div class="key">
            <small>event.key</small>
            <p>${event.key === ' ' ? 'Space' : event.key}</p>
        </div>

        <div class="key">
            <small>event.keyCode</small>
            <p>${event.keyCode}</p>
        </div>

        <div class="key">
            <small>event.code</small>
            <p>${event.code}</p>
        </div>
    `;
});
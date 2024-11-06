const panels = document.getElementsByClassName("panel");


Array.from(panels).forEach(panel => {
    panel.addEventListener('click', () => {
        Array.from(panels).forEach(element => {
            element.classList.remove('active');
        });
        panel.classList.add('active');
    });
});

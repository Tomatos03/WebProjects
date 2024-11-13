const items = document.querySelectorAll('.movie');

items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        const sons = item.children;
        for(const son of sons) {
            if(son.classList.contains("movie-overview")) {
                son.classList.add('active');
            }
        };
    });
    item.addEventListener('mouseout', () => {
        const sons = item.children;
        for(const son of sons) {
            if(son.classList.contains("movie-overview")) {
                son.classList.remove('active');
            }
        };
    });
});

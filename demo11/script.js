const API_URL = "https://api.wmdb.tv/api/v1/top?type=Douban&skip=0&limit=100&lang=Cn";

// const items = document.querySelectorAll('.movie');
const main = document.querySelector('main')

fetchMovies(API_URL);

async function fetchMovies(url) {
    const res = await fetch(url);
    const movis = await res.json();

    showMovies(movis);
}

function showMovies(movies) {
    movies.forEach((movie) => {
        console.log(movie);

        const {
            data: [{ name, description, poster }],
            doubanRating,
        } = movie;

        console.log(name, description, poster, doubanRating);
        
        const elem = document.createElement('div');
        elem.classList.add('movie');

        const color = getMovieRatingColor(doubanRating);

        elem.innerHTML = `
            <img src="${poster}"/>
            <div class="movie-info">
                <h3>${name}</h3>
                <span style="color: ${color};">${doubanRating}</span>
            </div>
            <div class="movie-overview">
                <h2>电影概述</h2>
                <p>${description}</p>
            </div>
        `;

        addMovieOverviewEvent(elem);
        main.appendChild(elem);
    });
}

function getMovieRatingColor(rating) {
    let color;
    if(rating >= 8) {
        color = 'GREEN';
    } else if(5 <= rating && rating < 8) {
        color = 'ORANGE';
    } else {
        color = "RED";
    }
    return color;
}


function addMovieOverviewEvent(movie) {
    movie.addEventListener('mouseover', () => {
        const sons = movie.children;
        for(const son of sons) {
            if(son.classList.contains("movie-overview")) {
                son.classList.add('active');
            }
        };
    });
    movie.addEventListener('mouseout', () => {
        const sons = movie.children;
        for(const son of sons) {
            if(son.classList.contains("movie-overview")) {
                son.classList.remove('active');
            }
        };
    });
}

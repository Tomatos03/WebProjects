const btn = document.querySelector('button');
const content = document.querySelector('.content');

console.log(content);


generatorJoke();

btn.addEventListener('click', generatorJoke);


async function generatorJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }

    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    content.innerHTML = data.joke;
}

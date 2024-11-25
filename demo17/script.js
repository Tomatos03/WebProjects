const btn = document.querySelector("button");

const time_container = document.querySelector(".time");
const date_container = document.querySelector(".date");

const needle_hour = document.querySelector('.hour');
const needle_minute = document.querySelector('.minute');
const needle_second = document.querySelector('.second');

const root = document.documentElement;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let currentMode = 0; // 0 Dark 1 Light


btn.addEventListener('click', (e) => switchTheme(e));

setTime();
setInterval(setTime, 1000);


function switchTheme(e) {
    if(currentMode == 0) {
        e.target.innerHTML = 'Light mode';
        root.style.setProperty('--first-color', '#000')
        root.style.setProperty('--second-color', '#fff');
    } else {
        e.target.innerHTML = 'Dark mode';
        root.style.setProperty('--first-color', '#fff')
        root.style.setProperty('--second-color', '#000');
    }
    currentMode ^= 1;
}


function setTime() {
    const time = new Date();
    const month = time.getMonth();  // 月(0, 11)
    const date = time.getDate(); 
    const day = time.getDay();

    const hour = time.getHours(); // 0 - 23
    const minutes = time.getMinutes();
    const second = time.getSeconds();

    const am_pm = hour < 12 ? "AM" : "PM";

    time_container.textContent = `${hour}:${minutes} ${am_pm}`;
    date_container.textContent = `${days[day]}, ${months[month]} ${date}`;

    const hour_to_deg = scale(hour, 0, 11, 0, 360) - 180;
    const minute_to_deg = scale(minutes, 0, 59, 0, 360) - 180;
    const second_to_deg = scale(second, 0, 59, 0, 360) - 180;

    console.log(hour_to_deg);

    needle_hour.style.transform = `translate(-50%, 0) rotate(${hour_to_deg}deg)`;
    needle_minute.style.transform = `translate(-50%, 0) rotate(${minute_to_deg}deg)`;
    needle_second.style.transform = `translate(-50%, 0) rotate(${second_to_deg}deg)`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
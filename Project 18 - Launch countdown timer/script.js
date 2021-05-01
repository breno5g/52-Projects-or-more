let days = 8;
let hours = 2;
let minutes = 1;
let seconds = 30;

let timer;

let dayBox = document.querySelector(".day"); 
let hourBox = document.querySelector(".hour"); 
let minuteBox = document.querySelector(".minute"); 
let secondBox = document.querySelector(".second"); 


function initTimer() {days
    loadTime();
    setTime();
    timer = setInterval(() => {
        if (seconds > 0 && seconds < 60) {
            seconds--; 
        } else if (minutes > 0 && minutes < 60) {
            seconds = 59;
            minutes--;
        } else if (hours > 0 && hours < 24) {
            seconds = 59;
            minutes = 59;
            hours--;
        } else if (days > 0) {
            seconds = 59;
            minutes = 59;
            hours = 23;
            days--
        } else {
            console.log("hora do descanso");
            clearInterval(timer);
        }
        saveActualTime();
        setTime()
    }, 1000);
}

function setTime() {
    hours < 10 ?  hourBox.innerText = `0${hours}` : hourBox.innerText = hours;
    minutes < 10 ?  minuteBox.innerText = `0${minutes}` : minuteBox.innerText = minutes;
    seconds < 10 ?  secondBox.innerText = `0${seconds}` : secondBox.innerText = seconds;
    days < 10 ?  dayBox.innerText = `0${days}` : secondBox.innerText = days;
}

function saveActualTime() {
    localStorage.setItem("days", days);
    localStorage.setItem("hours", hours);
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);
}

function loadTime() {
    if (localStorage.getItem("days") == null || localStorage.getItem("hours") == null || localStorage.getItem("minutes") == null || localStorage.getItem("seconds") == null) {
        seconds = 30;
        minutes = 1;
        hours = 2;
        days = 8;

    } else {
        days = localStorage.getItem("days");
        hours = localStorage.getItem("hours");
        minutes = localStorage.getItem("minutes");
        seconds = localStorage.getItem("seconds");
    }
}

window.addEventListener("load", initTimer())
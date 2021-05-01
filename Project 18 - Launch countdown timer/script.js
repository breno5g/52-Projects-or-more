let seconds = 30;
let minutes = 1;
let hours = 2;
let days = 8;

let timer;

let dayBox = document.querySelector(".day"); 
let hourBox = document.querySelector(".hour"); 
let minuteBox = document.querySelector(".minute"); 
let secondBox = document.querySelector(".second"); 


function initTimer() {
    setTime()
    timer = setInterval(() => {
        console.log(hours, minutes, seconds);
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
        setTime()
    }, 1000);
}

function setTime() {
    hours < 10 ?  hourBox.innerText = `0${hours}` : hourBox.innerText = hours;
    minutes < 10 ?  minuteBox.innerText = `0${minutes}` : minuteBox.innerText = minutes;
    seconds < 10 ?  secondBox.innerText = `0${seconds}` : secondBox.innerText = seconds;
    days < 10 ?  dayBox.innerText = `0${days}` : secondBox.innerText = days;
}

window.addEventListener("load", initTimer())
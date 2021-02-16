const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getCurrentTime(){
    const date = new Date();
    const hours = date.getHours();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${
        min < 10 ? `0${min}` : min}:${
        sec < 10 ? `0${sec}`: sec}`;
}

function init(){
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
}

init();
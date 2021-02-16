const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getCurrentTime(){
    const date = new Date();
    const hours = date.getHours();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    clockTitle.innerText = `${hours}:${min}:${sec}`;
}


function init(){
    getCurrentTime();
}

init();
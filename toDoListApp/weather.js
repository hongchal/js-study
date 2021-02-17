const API_KEY = "b5a9910e248ea4b955797285ba734d28";

const weather = document.querySelector(".js-weather"); 
const COORDS = "coords";

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        // console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature}'C @${place}`
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function successHandler(position){
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    const coordsObj = {
        latitude,
        longitude
    }; 
    // console.log(coordsObj);
    saveCoords(coordsObj);
    getWeather(coordsObj.latitude, coordsObj.longitude);
}

function ErrorHandler(){
    console.log('can not get currentposition!');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(successHandler, ErrorHandler);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();
const Nameform = document.querySelector(".js-Nameform"),
    input = Nameform.querySelector("input"),
    greeting_msg = document.querySelector("h4");

const USER_LS = "currentUserName",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = input.value;
    // console.log(currentValue);
    showGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    Nameform.classList.add(SHOWING_CN);
    Nameform.addEventListener("submit", submitHandler);
}

function showGreeting(text){
    Nameform.classList.remove(SHOWING_CN);
    greeting_msg.classList.add(SHOWING_CN);
    greeting_msg.innerText = `Hello ${text} :)`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }
    else{ //currentUserName is exist
        showGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();

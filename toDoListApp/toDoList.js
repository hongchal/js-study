const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; // key 

function saveToDos(text){
    localStorage.setItem(TODOS_LS, text); 
}

function showToDoList(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.innerText = "➖";
    // delbtn.innerText = "ㅡ";
    
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delbtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function submitHandler(event){
    event.preventDefault();
    const currenValue = toDoInput.value;
    showToDoList(currenValue);
    saveToDos(currenValue);
    toDoInput.value ="";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", submitHandler);
}

init(); 
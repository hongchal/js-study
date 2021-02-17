const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; // key 
let ToDos = []; 
/*
javascript에서는 const로 할당하면 재할당을 방지해줌 
재할당을 방지하기 때문에 기존에 있는 배열에 push는 가능함 ( 재할당하는게 아니므로 )
*/

/*
이 후 remainToDos로 재할당을 해줘야하기 때문에 const가 아닌 let으로 변경 
*/

function saveToDos(){  
    localStorage.setItem(TODOS_LS, JSON.stringify(ToDos)); 
}

function dltbtnhandler(event){
    const clickedbtn = event.target;
    const li = clickedbtn.parentNode;   
    // console.log(li);
    toDoList.removeChild(li); // remove todo in html 

    const remainToDos = ToDos.filter(function(toDo){
        // console.log(typeof(li.id), typeof(toDo.id));
        return parseInt(li.id) !== toDo.id;
    });
    //console.log(remainToDos);
    ToDos = remainToDos;
    saveToDos();
}

function showToDoList(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const newId = ToDos.length + 1 ; // id = 1부터 시작하도록 
    
    delbtn.innerText = "➖";
    delbtn.addEventListener("click", dltbtnhandler);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delbtn);
    li.appendChild(span);
    li.id = newId; 
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : newId
    };
    ToDos.push(toDoObj);
    saveToDos(); // remain 이 후 새로고침했을 때 id가 재설정가능하게됨 
}

function submitHandler(event){
    event.preventDefault();
    const currenValue = toDoInput.value;
    showToDoList(currenValue);
    // saveToDos();
    toDoInput.value ="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);  
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); //string to object 
        // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){  //parsedToDos => array , toDo => object 
            // console.log(toDo);
            showToDoList(toDo.text);
            console.log()
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", submitHandler);
}

init(); 
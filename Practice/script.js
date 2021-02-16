// const title = document.getElementById('title');
// console.log(title);
// title.innerHTML = "hi from js";

const title = document.querySelector("#title");
title.innerHTML = "im a querySelector";

const CLICKED_CLASS = "clicked";

// function clickhandler(){
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if(!hasClass){
//         title.classList.add(CLICKED_CLASS);
//     }    
//     else{
//         title.classList.remove(CLICKED_CLASS);
//     }
// }

function clickhandler(){
    title.classList.toggle(CLICKED_CLASS);
}

title.addEventListener("click", clickhandler);



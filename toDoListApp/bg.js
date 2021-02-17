const body = document.querySelector("body");

function genRandomNum(){
    const num = Math.floor(Math.random() * 5) + 1;
    if(num <=0 && num > 6){
        console.error("problem in genRandomNum()");
    } 
    return num;
}

function init(){
    const randomNum = genRandomNum();
    const image = document.createElement("img");
    image.src = `images/${randomNum}.jpg`;
    image.classList.add("bgimg");
    body.appendChild(image);
}

init(); 
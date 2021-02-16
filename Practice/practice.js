const myInfo = {
    name: "hongchal",
    age: "26",
    male: true,
    favMovie : ['matrix', 'LOTK', 'Avata'],
    favFood : [
      {
        name: "kimchi",
        fatty: "low" 
      },
      {
        name: "cheeseBuger",
        fatty: "high"
      }
    ]
  }
  
  // console.log(myInfo.favFood);
  
  function sayHello(name, age){
    // console.log('hello', name, 'im', age, 'years olds');
    return `hello ${name} you are ${age} years olds`;
  }
  
  const helloHongchal = sayHello("hongchal", 26);
  // console.log(helloHongchal);
  
  const calculator = {
    plus: function(a, b){
      return a + b;
    },
    sub: function(a, b){
      return a - b;
    },
    div: function(a, b){
      return a / b 
    },
    multi: function(a, b){
      return a * b;
    }
  }
  
  const c = calculator.sub(5, -1);
  // console.log(c);


  // const BASE_COLOR = "white";
  // const OTHER_COLOR = "blue"; 
  
  // function clickhandler(){
  //     const currentColor = title.style.color;
  //     if(currentColor === BASE_COLOR){
  //         title.style.color = OTHER_COLOR; 
  //     }
  //     else{
  //         title.style.color = BASE_COLOR; 
  //     }
  // }
  
  // function init(){
  //     title.style.color = BASE_COLOR; 
  // }
  // init(); 

  
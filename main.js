const Display = document.querySelector(".display");
const Btn = document.querySelectorAll("button");
let FirstNumber = "";
let SeccondNumber = "";
let lastEvent = "";
let result = "";
Btn.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.id != +e.id  ) {
        if (e.id==".") {
      Display.value +=e.id;
            
        }
        else{
            FirstNumber = +Display.value;
            remover();
            lastEvent = e.id;
        }

    }
     else {
      Display.value +=e.id;
    }
  });
});

function remover() {
    if (lastEvent==="=") {
        Display.value = " ";
    }else{
        Display.value = result;

    }
}

function equal() {
  SeccondNumber = +Display.value;
  if (lastEvent === "+") {
    plus();
  } else if (lastEvent === "-") {
    minus() 
  } else if (lastEvent === "*") {
    multi()
  } else if (lastEvent === "/") {
    taqsim()
  }
  
  Display.value =result;
  console.log(Display.value );
  
}

function oneAtepBack() {
  let str = Display.value;
  str = str.slice(0, -1);
  Display.value = str;
}

function plus() {
    result = FirstNumber + SeccondNumber;

}
function minus() {
    result = FirstNumber - SeccondNumber;

}
function multi() {
    result = FirstNumber * SeccondNumber;

}
function taqsim() {
  if (FirstNumber === 0 ||  SeccondNumber === 0 ) {
    alert('you cant divide with zero ')
  }
      result = FirstNumber / SeccondNumber;

  
     

}

//Here I declare my notes as variables
const f5 = {
    note: "f5",
    elem: document.getElementById("f5"),
    timer: 0
};
const e5 = {
    note: "e5",
    elem: document.getElementById("e5"),
    timer: 0
};
const d5 = {
    note: "d5",
    elem: document.getElementById("d5"),
    timer: 0
};
const c5 = {
    note: "c5",
    elem: document.getElementById("c5"),
    timer: 0
};
const b4 = {
    note: "b4",
    elem: document.getElementById("b4"),
    timer: 0
};
const a4 = {
    note: "a4",
    elem: document.getElementById("a4"),
    timer: 0
};
const g4 = {
    note: "g4",
    elem: document.getElementById("g4"),
    timer: 0
};
const f4 = {
    note: "f4",
    elem: document.getElementById("f4"),
    timer: 0
};

let notas = [f5, e5, d5, c5, b4, a4, g4, f4];
let notaVisible = []

//Here I declare and get my buttons. 
let timebuton = document.querySelector('#timeStamp')
let boton = document.querySelector('#botonTest');
let c = document.querySelector('#c');
let d = document.querySelector('#d');
let e = document.querySelector('#e');
let f = document.querySelector('#f');
let g = document.querySelector('#g');
let a = document.querySelector('#a');
let b = document.querySelector('#b');


//My functions


let dibuja = function() { //Function to hide and show notes

    let randomElement = Math.floor(Math.random() * notas.length); //My current algorithm

    if (notaVisible.length > 0) { // If the is an element in array. 
        notaVisible[0].elem.style.display = "none" //Hide the previous DOM element. 
        notaVisible.shift(); //Erase the first object from array. 
    }
    notaVisible.push(notas[randomElement]); //Introduce new element into array. 
    notaVisible[notaVisible.length - 1].elem.style.display = "block"; //Hide the element from the DOM
    activeNote = notaVisible[0]
    return activeNote
};


//Function to check wether the right button has been clicked. 
let checkTest = function(event) {
    butonToString = String(event.target.getAttribute('id'))
    if (activeNote.note.includes(butonToString)) {
        let pushTime = storeTime()
      activeNote.timer = pushTime
        dibuja();
      
    }
}

//When I click the button, the timestamp need to be stored. I could have an array of time stamps that are recorded. The first timestamp is the time when the button is clicked. 
  time = []

let storeTime = function () {

  if (time.length > 0 ){
    time.unshift(new Date().getTime());
    time.splice(2,1);
    interval = time[0]-time[1]
    interval = interval/1000 // From miliseconds to seconds
    return interval 
  }
  time.push(new Date().getTime())
}

/*
function compare( a , b ) {
  if ( a.timer< b.timer ){
    return -1;
  }
  if ( a.timer > b.timer ){
    return 1;
  }
  return 0;
}
*/


//typeof(time[0])

c.addEventListener('click',checkTest);
d.addEventListener('click', checkTest);
e.addEventListener('click', checkTest);
f.addEventListener('click', checkTest);
g.addEventListener('click', checkTest);
a.addEventListener('click', checkTest);
b.addEventListener('click', checkTest);
boton.addEventListener('click', dibuja);
timebuton.addEventListener('click', storeTime)



/*

//Here I declare my notes as variables 
const f5 = document.getElementById("f5");
const e5 = document.getElementById("e5");
const d5 = document.getElementById("d5");
const c5 = document.getElementById("c5");
const b4 = document.getElementById("b4");
const a4 = document.getElementById("a4");
const g4 = document.getElementById("g4");
const f4 = document.getElementById("f4");

let notas = [f5,e5,d5,c5,b4,a4,g4,f4]
let notaVisible = []

//Here I declare and get my buttons. 
let boton = document.querySelector('#botonTest');
let C = document.querySelector('#c');
let D = document.querySelector('#d');
let E = document.querySelector('#e');
let F = document.querySelector('#f');
let G = document.querySelector('#g');
let A = document.querySelector('#a');
let B = document.querySelector('#b');





//My necesary functions 


let Hide = function() {notaVisible[0].style.display="none"}
let Show = function () {notaVisible[notaVisible.length - 1].style.display="block";}

//Function to hide and show notes
let dibuja = function () {
  let randomElement = Math.floor(Math.random() * notas.length);  
  if(notaVisible.length >0 ) {
    Hide();
    notaVisible.shift();
  }    
  notaVisible.push(notas[randomElement]);
  Show();
  return notaVisible;
}

//Function to check wether the right button has been clicked. 
//Should listen for what answer the user clicks on, compare it to the correct answer. If Correct should then run the function HideAndShow. 








boton.addEventListener('click',dibuja);



function myFunction() {
document.getElementById("b4").style.opacity="1";
  }

*/
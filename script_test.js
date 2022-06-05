//Here I declare my notes as variables
class Note {
    constructor(note, elem, clef, distance, timer, midinote) {
        this.note = note;
        this.elem = elem;
        this.clef = clef;
        this.distance = distance;
        this.timer = timer;
        this.midinote = midinote;
    }
}


const f6 = new Note('f6', document.getElementById("pos22"), 'treble', 3.5)
const e6 = new Note('e6', document.getElementById("pos21"), 'treble', 3)
const d6 = new Note('d6', document.getElementById("pos20"), 'treble', 2.5)
const c6 = new Note('c6', document.getElementById("pos19"), 'treble', 2)
const b5 = new Note('b5', document.getElementById("pos18"), 'treble', 1.5)
const a5 = new Note('a5', document.getElementById("pos17"), 'treble', 1)
const g5 = new Note('g5', document.getElementById("pos16"), 'treble')
const f5 = new Note('f5', document.getElementById("pos15"), 'treble')
const e5 = new Note('e5', document.getElementById("pos14"), 'treble')
const d5 = new Note('d5', document.getElementById("pos13"), 'treble')
const c5 = new Note('c5', document.getElementById("pos12"), 'treble')
const b4 = new Note('b4', document.getElementById("pos11"), 'treble')
const a4 = new Note('a4', document.getElementById("pos10"), 'treble')
const g4 = new Note('g4', document.getElementById("pos9"), 'treble')
const f4 = new Note('f4', document.getElementById("pos8"), 'treble')
const e4 = new Note('e4', document.getElementById("pos7"), 'treble')
const d4 = new Note('d4', document.getElementById("pos6"), 'treble')
const c4 = new Note('c4', document.getElementById("pos5"), 'treble')
const b3 = new Note('b3', document.getElementById("pos4"), 'treble')
const a3 = new Note('a3', document.getElementById("pos3"), 'treble')
const g3 = new Note('g3', document.getElementById("pos2"), 'treble')
const f3 = new Note('f3', document.getElementById("pos1"), 'treble')

const a4b = new Note('a4', document.getElementById("pos22"), 'bass',)
const g4b = new Note('g4', document.getElementById("pos21"), 'bass',)
const f4b = new Note('f4', document.getElementById("pos20"), 'bass',)
const e4b = new Note('e4', document.getElementById("pos19"), 'bass',)
const d4b = new Note('d4', document.getElementById("pos18"), 'bass',)
const c4b = new Note('c4', document.getElementById("pos17"), 'bass',)
const b3b = new Note('b3', document.getElementById("pos16"), 'bass')
const a3b = new Note('a3', document.getElementById("pos15"), 'bass')
const g3b = new Note('g3', document.getElementById("pos14"), 'bass')
const f3b = new Note('f3', document.getElementById("pos13"), 'bass')
const e3 = new Note('e3', document.getElementById("pos12"), 'bass')
const d3 = new Note('d3', document.getElementById("pos11"), 'bass')
const c3 = new Note('c3', document.getElementById("pos10"), 'bass')
const b2 = new Note('b2', document.getElementById("pos9"), 'bass')
const a2 = new Note('a2', document.getElementById("pos8"), 'bass')
const g2 = new Note('g2', document.getElementById("pos7"), 'bass')
const f2 = new Note('f2', document.getElementById("pos6"), 'bass')
const e2 = new Note('e2', document.getElementById("pos5"), 'bass')
const d2 = new Note('d2', document.getElementById("pos4"), 'bass')
const c2 = new Note('c2', document.getElementById("pos3"), 'bass')
const b1 = new Note('b1', document.getElementById("pos2"), 'bass')
const a1 = new Note('a1', document.getElementById("pos1"), 'bass')




let notas = [f6, e6, d6, c6, b5, a5, g5, f5, e5, d5, c5, b4, a4, g4, f4, e4, d4, c4, b3, a3, g3, f3, a4b, g4b, e4b, b3b, a3b, g3b,
    f3b, e3, d3, c3, b2, a2, g2, f2, e2, d2, c2, b1, a1
];
let notaVisible = []

//Here I declare and get my buttons. 
let timebuton = document.querySelector('#timeStamp')
let boton = document.querySelector('#botonTest');

// Declaring my clefs. 

let treble = document.querySelector('.gclef');
let bass = document.querySelector('.bass');

//Declaring my lines 

let line1up = document.querySelector('.line1-up');
let line2up = document.querySelector('.line2-up');
let line3up = document.querySelector('.line3-up');


//My functions
let dibuja = function() { //Function to hide and show notes

    let randomElement = Math.floor(Math.random() * notas.length); //My current algorithm

    if (notaVisible.length > 0) { //If there is an element in array. 
        notaVisible[0].elem.style.display = "none" //Hide the previous DOM element. 
        notaVisible.shift(); //Erase the first object from array. 
    }
    notaVisible.push(notas[randomElement]); //Introduce new element into array. 
    notaVisible[notaVisible.length - 1].elem.style.display = "block"; //Show the element in DOM
    activeNote = notaVisible[0]
    //including lines if necesary 

    switch (activeNote.clef) {
        case "treble":
            treble.style.display = "block";
            bass.style.display = "none";
            break;
        case "bass":
            treble.style.display = "none";
            bass.style.display = "block";
            break;
        default:
            treble.style.display = "block";
            bass.style.display = "none";

    }

    return activeNote
};


let algorithm = function() {


}


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

let storeTime = function() {

    if (time.length > 0) {
        time.unshift(new Date().getTime());
        time.splice(2, 1);
        interval = time[0] - time[1]
        interval = interval / 1000 // From miliseconds to seconds
        return interval
    }
    time.push(new Date().getTime())
}

function compare(a, b) {
    if (a.timer < b.timer) {
        return -1;
    }
    if (a.timer > b.timer) {
        return 1;
    }
    return 0;
}

g5.timer = 30
g4.timer = 30


const newarray = notas.sort(compare);



const map1 = notas.map(({note})=> note); 

console.log(map1)




c.addEventListener('click', checkTest);
d.addEventListener('click', checkTest);
e.addEventListener('click', checkTest);
f.addEventListener('click', checkTest);
g.addEventListener('click', checkTest);
a.addEventListener('click', checkTest);
b.addEventListener('click', checkTest);
boton.addEventListener('click', dibuja);
timebuton.addEventListener('click', storeTime)
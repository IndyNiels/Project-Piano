//Here I declare my notes as variables
class Note {
    constructor(note, elem, clef, distance, timer,position, midinote) {
        this.note = note;
        this.elem = elem;
        this.clef = clef;
        this.distance = distance;
        this.timer = timer;
        this.position = position; 
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


let notas = [f6, e6, d6, c6, b5, a5, g5, f5, e5, d5, c5, b4, a4, g4, f4, e4, d4, c4, b3, a3, g3, f3, a4b, g4b, e4b, b3b, a3b, g3b,f3b, e3, d3, c3, b2, a2, g2, f2, e2, d2, c2, b1, a1 ];


let mySong = [c3,g3,e4,f2,a3,c2,g4,e5,c4,a4,d3,b3,b4,b1,b2,f3,f4,a1,g2,a2,e3,d2,e2,c5,d4,d5,g5]

//Adding to timer 100 seconds to all notes
const addTimer = (notes) => notes.map(x=> x.timer = 100);

//Adding position to notes from left to right of the keyboard starting from 0 
const addPosition = (notes) => {
  notes.reverse()
for (let i = 0; i<notes.length; i++) {
  notes[i].position = i
}};

//Sort for initializing game. We start from c4 (23 position)
const sortNotes = (notes) => notes.sort((a,b) => (Math.abs(a.position-29)> Math.abs(b.position -29))? 1 : -1)


//Loading notes to play (Depending on the song)


const initialize = (notes) => {
  addTimer(notes);
  addPosition(notes);
  sortNotes(notes);
  dibuja(notes);
};

//Saving the progress when we close the window
window.addEventListener('beforeunload', function () {
  localStorage.setItem('savedSong', JSON.stringify(mySong));
});

// At loading event -> Initiate saved item, if doesns exist state explicitly. 






//Here I declare and get my buttons. 
let boton = document.querySelector('#start-button');

// Declaring my clefs. 
let treble = document.querySelector('.gclef');
let bass = document.querySelector('.bass');

//Declaring my lines
let line1up = document.querySelector('.line1-up');
let line2up = document.querySelector('.line2-up');
let line3up = document.querySelector('.line3-up');


//My functions ==================================================================


//Declaring my sorting algorithm

let algo = function (notes) {
notes.sort((a, b) => (a.timer > b.timer) ? 1 : (a.timer === b.timer) ? ((Math.abs(a.position-23) > Math.abs(b.position-23)) ? 1 : -1) : -1 ); 

  return notes
}

//Declaring the visible note.
let notaVisible = []


//Declaring my drawing function 
let dibuja = function(notes) { //Function to hide and show notes

  algo(notes);


     //If there is an element in array, hide previous DOM element and erase first object array.
    if (notaVisible.length > 0) { 
        notaVisible[0].elem.style.display = "none" 
        notaVisible.shift(); 
    }

    //Introduce new note objet in array and display his DOM element.
    notaVisible.push(mySong[Math.floor(Math.random() * 10)]); 
    notaVisible[notaVisible.length - 1].elem.style.display = "block"; 
    activeNote = notaVisible[0]
    
    //Display corresponding clef
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
//console.table(notes)
    return activeNote
};

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


//Function to check wether the right button has been clicked. 
let checkTest = function(event, notes = mySong) {
    butonToString = String(event.target.getAttribute('id'))


    if (activeNote.note.includes(butonToString)) {
      event.target.classList.add('animated');
      setTimeout(()=> {
        event.target.classList.remove('animated')
      },1500);
        let pushTime = storeTime();
        activeNote.timer = pushTime;
        if(activeNote.timer < 2 ) {activeNote.timer +=100} 
        dibuja(notes);
    }
}




//Adding event listeners to Button notes.
const flatNotes = [c,d,e,f,g,a,b]
flatNotes.forEach(item => {
  item.addEventListener('click',checkTest)
});


// When pressing "Start" , check for wether there is a saved song, otherwise play default song.
//Check if song is saved...

boton.addEventListener("click", function () {
  const retrievedSong = JSON.parse(localStorage.getItem("savedSong"));
  if (typeof variable !== "undefined") {
    console.log(retrievedSong);
    initialize(retrievedSong);
  } else {
    initialize(mySong);
    console.log("didnt work mate");
    console.table(retrievedSong);
  }
});

//Function to change html text for notation.


let menu = document.getElementsByClassName('flatNotes');
let children = menu[0].children;

console.log(children)

//children[0].innerHTML = "world";


letter = document.getElementById("letter")
solfege = document.getElementById("solfege")



let changeNames = function (event) {

event.target.parentNode.childNodes[1].classList.remove("active")
  event.target.classList.toggle("active");
  
  
  const cb = ["C","D","E","F","G","A","B"]
  
  for (let i = 0; i<children.length; i++ ) {
    children[i].innerHTML = cb[0]
    cb.shift();
  }
}


letter.addEventListener('click',changeNames)
solfege.addEventListener('click',changeNames)















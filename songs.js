class Note {
  constructor(note, elem, clef, distance, timer, position, midinote) {
    this.note = note;
    this.elem = elem;
    this.clef = clef;
    this.distance = distance;
    this.timer = timer;
    this.position = position;
    this.midinote = midinote;
  }
}



const c7 = new Note("c7", document.getElementById("pos26"), "treble");
const b6 = new Note("b6", document.getElementById("pos25"), "treble");
const a6 = new Note("a6", document.getElementById("pos24"), "treble");
const g6 = new Note("g6", document.getElementById("pos23"), "treble");
const f6 = new Note("f6", document.getElementById("pos22"), "treble");
const e6 = new Note("e6", document.getElementById("pos21"), "treble");
const d6 = new Note("d6", document.getElementById("pos20"), "treble");
const c6 = new Note("c6", document.getElementById("pos19"), "treble");
const b5 = new Note("b5", document.getElementById("pos18"), "treble");
const a5 = new Note("a5", document.getElementById("pos17"), "treble");
const g5 = new Note("g5", document.getElementById("pos16"), "treble");
const f5 = new Note("f5", document.getElementById("pos15"), "treble");
const e5 = new Note("e5", document.getElementById("pos14"), "treble");
const d5 = new Note("d5", document.getElementById("pos13"), "treble");
const c5 = new Note("c5", document.getElementById("pos12"), "treble");
const b4 = new Note("b4", document.getElementById("pos11"), "treble");
const a4 = new Note("a4", document.getElementById("pos10"), "treble");
const g4 = new Note("g4", document.getElementById("pos9"), "treble");
const f4 = new Note("f4", document.getElementById("pos8"), "treble");
const e4 = new Note("e4", document.getElementById("pos7"), "treble");
const d4 = new Note("d4", document.getElementById("pos6"), "treble");
const c4 = new Note("c4", document.getElementById("pos5"), "treble");
const b3 = new Note("b3", document.getElementById("pos4"), "treble");
const a3 = new Note("a3", document.getElementById("pos3"), "treble");
const g3 = new Note("g3", document.getElementById("pos2"), "treble");
const f3 = new Note("f3", document.getElementById("pos1"), "treble");

const e5b = new Note("e5", document.getElementById("pos26"), "bass");
const d5b = new Note("d5", document.getElementById("pos25"), "bass");
const c5b = new Note("c5", document.getElementById("pos24"), "bass");
const b4b = new Note("b4", document.getElementById("pos23"), "bass");
const a4b = new Note("a4", document.getElementById("pos22"), "bass");
const g4b = new Note("g4", document.getElementById("pos21"), "bass");
const f4b = new Note("f4", document.getElementById("pos20"), "bass");
const e4b = new Note("e4", document.getElementById("pos19"), "bass");
const d4b = new Note("d4", document.getElementById("pos18"), "bass");
const c4b = new Note("c4", document.getElementById("pos17"), "bass");
const b3b = new Note("b3", document.getElementById("pos16"), "bass");
const a3b = new Note("a3", document.getElementById("pos15"), "bass");
const g3b = new Note("g3", document.getElementById("pos14"), "bass");
const f3b = new Note("f3", document.getElementById("pos13"), "bass");
const e3 = new Note("e3", document.getElementById("pos12"), "bass");
const d3 = new Note("d3", document.getElementById("pos11"), "bass");
const c3 = new Note("c3", document.getElementById("pos10"), "bass");
const b2 = new Note("b2", document.getElementById("pos9"), "bass");
const a2 = new Note("a2", document.getElementById("pos8"), "bass");
const g2 = new Note("g2", document.getElementById("pos7"), "bass");
const f2 = new Note("f2", document.getElementById("pos6"), "bass");
const e2 = new Note("e2", document.getElementById("pos5"), "bass");
const d2 = new Note("d2", document.getElementById("pos4"), "bass");
const c2 = new Note("c2", document.getElementById("pos3"), "bass");
const b1 = new Note("b1", document.getElementById("pos2"), "bass");
const a1 = new Note("a1", document.getElementById("pos1"), "bass");
const g1 = new Note("g1", document.getElementById("pos0"), "bass");
const f1 = new Note("f1", document.getElementById("pos-1"), "bass");
const e1 = new Note("e1", document.getElementById("pos-2"), "bass");
const d1 = new Note("d1", document.getElementById("pos-3"), "bass");
const c1 = new Note("c1", document.getElementById("pos-4"), "bass");

let newNotes = []
let solfegeNotes = "cdefgab".split('')

solfegeNotes.length




for (let i = 7, j=0 ; i< 27 ,j<27; i++, j++  ) {
console.log(`${i}: ${solfegeNotes[j]}`)
}



export const notas = [
    c7,
    b6,
    a6,
    g6,
    f6,
    e6,
    d6,
    c6,
    b5,
    a5,
    g5,
    f5,
    e5,
    d5,
    c5,
    b4,
    a4,
    g4,
    f4,
    e4,
    d4,
    c4,
    b3,
    a3,
    g3,
    f3,
    a4b,
    g4b,
    e4b,
    b3b,
    a3b,
    g3b,
    f3b,
    e3,
    d3,
    c3,
    b2,
    a2,
    g2,
    f2,
    e2,
    d2,
    c2,
    b1,
    a1,
    g1,
    f1,
    e1,
    d1,
    c1,
  ];
  
  export let mySong = [
    c3,
    g3,
    e4,
    f2,
    a3,
    c2,
    g4,
    e5,
    c4,
    a4,
    d3,
    b3,
    b4,
    b1,
    b2,
    f3,
    f4,
    a1,
    g2,
    a2,
    e3,
    d2,
    e2,
    c5,
    d4,
    d5,
    g5,
  ];
  

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

//some variables
var oscillator;
var osc = "sine";
var scaleBase = 200;
var interval = 2;
notes = [200, 250, 300, 200, 230,];

var majorScale = [];
var minorScale = [];

//sound function
function playNotes(a, b) {

  //Create a periodic waveform
  oscillator = context.createOscillator();

  //Select a waveform type (sine, triangle,...)
  oscillator.type = a;

  //Select a frequency
  oscillator.frequency.value = b;

  //Create volume
  const gainNode = context.createGain();
  //Connect our audiosource(oscillator) with the volume
  oscillator.connect(gainNode);
  //Connect input/gain with the output (Speakers)
  gainNode.connect(context.destination);
  //Time of sound
  gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2);

  oscillator.start(0);
}


function ttScaleGenerator () {

unison = (scaleBase * 1);
min2nd = (scaleBase * 1.06667);
maj2nd = (scaleBase * 1.125);
min3rd = (scaleBase * 1.2);
maj3rd = (scaleBase * 1.25);
perfect4th = (scaleBase * 1.33333);
tritone = (scaleBase * 1.40625);
perfect5th = (scaleBase * 1.5);
min6th = (scaleBase * 1.6);
maj6th = (scaleBase * 1.66667);
min7th = (scaleBase * 1.8);
maj7th = (scaleBase * 1.875);
octave = (scaleBase * 2);

    chromaticScale.push (unison, minor2nd, major2nd, minor3rd, major3rd, perfect4th,tritone, perfect5th, minor6th, major6th, minor7th, major7th, octave);
    majorScale.push (unison, major2nd, major3rd, perfect4th, perfect5th, major6th, major7th,octave);
    minorScale.push (unison,major2nd, minor3rd, perfect4th, perfect5th, minor6th, minor7th, octave);
}

ttScaleGenerator();
function playN () {
playNotes(osc, notes[0], 8)
}

document.querySelector("#play").addEventListener("mousedown", function() {
    playN();
  });
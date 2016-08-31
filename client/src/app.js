var ChordyRunner = require('./chordy/models/chordyRunner')
var Fretboard = require('./ui/fretboard')
window.onload = function () {
  renderUI();

  var chordy = new ChordyRunner();
  var result = chordy.findChord(["X", "3", "2", "0", "1", "0"]); 

  function renderUI(){
    new Fretboard();
  }
}
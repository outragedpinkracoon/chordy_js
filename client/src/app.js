var ChordyRunner = require('./chordy/models/chordyRunner')
var Fretboard = require('./ui/fretboard')
var Notes = require('./ui/notes')
window.onload = function () {
  renderUI();
  setupChordy();

  function renderUI(){
    new Fretboard();
    new Notes();
  }

  function setupChordy(){
    var chordy = new ChordyRunner();
    var result = chordy.findChord(["X", "3", "2", "0", "1", "0"]);
  }
}
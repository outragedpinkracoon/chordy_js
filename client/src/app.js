var ChordyRunner = require('./chordy/models/chordyRunner')
var Fretboard = require('./ui/fretboard')
var Notes = require('./ui/notes')
var DomState = require('./ui/domState')
var TemplateEngine = require('./ui/templateEngine')
window.onload = function () {
  var chordy = new ChordyRunner();
  renderUI(chordy);

  function renderUI(chordy){
    new Fretboard(new TemplateEngine());
    new Notes(new DomState(), [chordy]);
  }
}
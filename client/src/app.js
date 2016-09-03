var ChordyRunner = require('./chordy/models/chordyRunner')
var Fretboard = require('./ui/fretboard')
var Notes = require('./ui/notes')
var DomState = require('./ui/domState')
var TemplateEngine = require('./ui/templateEngine')

window.onload = function () {

  var App = class {
    constructor(){
      this.chordy = new ChordyRunner();
      this.renderUI();
    }

    renderUI(chordy){
      new Fretboard(new TemplateEngine());
      new Notes(new DomState(), [this]);
    }

    notify(context) {
      document.getElementById('result').innerText = ""
      if(!context.maxReached) return;
      
      var result = this.chordy.findChord(context.notesSelected);
      console.log(context.notesSelected);
      document.getElementById('result').innerText = result;
    }
  };

  new App();
}
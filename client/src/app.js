 const ChordyRunner = require('./chordy/models/chordyRunner')
 const Fretboard = require('./ui/fretboard')
 const Notes = require('./ui/notes')
 const DomState = require('./ui/domState')
 const TemplateEngine = require('./ui/templateEngine')

window.onload = function () {

  const App = class {
    constructor(){
      this.chordy = new ChordyRunner();
      this.renderUI();
    }

    renderUI(chordy){
      new Fretboard(new TemplateEngine());
      new Notes({
        domState:new DomState(), 
        observers:[this],
        maxSelection: 6
      });
    }

    notify(context) {
      document.getElementById('result').innerText = ""
      if(!context.maxReached) return;
      
      const result = this.chordy.findChord(context.notesSelected);
      document.getElementById('result').innerText = result;
    }
  };

  new App();
}
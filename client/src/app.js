const ChordyRunner = require('./chordy/models/chordyRunner')
const Fretboard = require('./ui/fretboard')
const Notes = require('./ui/notes')
const DomState = require('./ui/domState')
const TemplateEngine = require('./ui/templateEngine')
import './styles/style.css'; 

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
      const placeHolder = "Result: ";
      document.getElementById('result').innerText = placeHolder;
      if(!context.maxReached) return;
      
      const result = this.chordy.findChord(context.notesSelected);
      document.getElementById('result').innerText = placeHolder+result;
    }
  };

  new App();
}
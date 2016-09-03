class Keys {
  constructor(){
    this.fretClass = ".js-fret";
    this.selectedClass = "selected-note";
    this.resetFlag = "reset";
    this.touchedFlag = "touched";
    this.specialNotes = ["0", "X"];
    this.noteSelector = ".js-fret > div > p";
  }

  generateNoteSelector(stringIndex){
    return 'p[data-string="'+stringIndex+'"].selected-note'
  }
}

module.exports = Keys;
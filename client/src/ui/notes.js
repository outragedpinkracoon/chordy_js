class Notes {
  constructor(options) {
    this.domState = options.domState;
    this.maxSelection = options.maxSelection;
    this.observers = options.observers;
    this.keys = options.keys;
    this.attachEvents();
  }

  onClick(e) {
    var target = e.currentTarget;
    this.clearString(target);
    this.toggleText(target);

    if(this.domState.hasClass(this.keys.resetFlag, target.classList)) {
      this.domState.removeClasses([this.keys.selectedClass, this.keys.resetFlag, this.keys.touchedFlag], target.classList);
    }
    else {
      this.domState.addClasses([this.keys.selectedClass, this.keys.touchedFlag], target.classList);
    }
    this.notifyObservers();
  }

  toggleText(target) {
    if(target.innerText === "X") {
      this.domState.addClass(this.keys.resetFlag, target.classList);
      this.resetLetter(target);
      return;
    }
    if(target.innerText === "0") {
      target.innerText = "X";
      return;
    }
    if(this.domState.hasClass(this.keys.touchedFlag, target.classList)) {
      target.innerText = "0";
    }
  }

  notifyObservers() {
    const currentlySelected = this.domState.elementsOfClass(this.keys.selectedClass);

    for(const observer of this.observers){
      observer.notify({
         notesSelected: this.getNotes(currentlySelected),
         maxReached: this.maxNotesReached(currentlySelected)
      });
    }
  }

  resetLetter(note){
    note.innerText = " ";
  }

  maxNotesReached(currentlySelected) {
    return currentlySelected.length == this.maxSelection
  }

  clearString(element) {
    const stringNumber = element.dataset.string;
    const selectedAlready = this.getSelectedNotesOnString(stringNumber);
    const collision = false;
    for(const note of selectedAlready) {
      if(this.isSameNote(element, note)) continue;
      this.domState.removeClass(this.keys.selectedClass, note.classList);
      this.resetLetter(note);
    }
    return collision;
  }

  isSameNote(clickedElement, noteToCheck) {
    const fretNumber = clickedElement.closest(this.keys.fretClass).dataset.fret;
    return noteToCheck.closest('.js-fret').dataset.fret == fretNumber;
  }

  getNotes(selectedNotes) {
    const results = [];
    for(let i = 1; i<7; i++){
      const playedNotes = this.getSelectedNotesOnString(i);
        
      for(const note of playedNotes) {
        if(this.keys.specialNotes.indexOf(note.innerText) != -1) {
          results.push(note.innerText);
        }
        else {
        results.push(note.closest(this.keys.fretClass).dataset.fret);
        }
      }
    }
    return results.reverse();
  }

  getSelectedNotesOnString (stringIndex) {
    const items =  document.querySelectorAll(this.keys.generateNoteSelector(stringIndex));
    return Array.prototype.slice.call(items);
  }

  attachEvents() {
    const elements = document.querySelectorAll(this.keys.noteSelector);
    
    for(let i =0; i < elements.length; i++){
      const elem = elements[i];   
      elem.onclick = this.onClick.bind(this);
    } 
  }

}

module.exports = Notes;
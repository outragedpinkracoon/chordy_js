class Notes {
  constructor(options) {
    this.attachEvents();
    this.domState = options.domState;
    this.maxSelection = options.maxSelection;
    this.observers = options.observers;
    //todo move these out
    this.parentClass = ".js-fret";
    this.selectedClass = "selected-note";
    this.resetFlag = "reset";
    this.touchedFlag = "touched";
    this.specialNotes = ["0", "X"];
  }

  onClick(e) {
    var target = e.currentTarget;
    this.clearString(target);
    this.toggleText(target);

    if(this.domState.hasClass(this.resetFlag, target.classList)) {
      this.domState.removeClasses([this.selectedClass, this.resetFlag, this.touchedFlag], target.classList);
    }
    else {
      this.domState.addClasses([this.selectedClass, this.touchedFlag], target.classList);
    }
    this.notifyObservers();
  }

  toggleText(target) {
    if(target.innerText === "X") {
      this.domState.addClass(this.resetFlag, target.classList);
      this.resetLetter(target);
      return;
    }
    if(target.innerText === "0") {
      target.innerText = "X";
      return;
    }
    if(this.domState.hasClass(this.touchedFlag, target.classList)) {
      target.innerText = "0";
    }
  }

  notifyObservers() {
    const currentlySelected = this.domState.elementsOfClass(this.selectedClass);

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
      this.domState.removeClass(this.selectedClass, note.classList);
      this.resetLetter(note);
    }
    return collision;
  }

  isSameNote(clickedElement, noteToCheck) {
    const fretNumber = clickedElement.closest(this.parentClass).dataset.fret;
    return noteToCheck.closest('.js-fret').dataset.fret == fretNumber;
  }

  getNotes(selectedNotes) {
    const results = [];
    for(let i = 1; i<7; i++){
      const playedNotes = this.getSelectedNotesOnString(i);
        
      for(const note of playedNotes) {
        if(this.specialNotes.indexOf(note.innerText) != -1) {
          results.push(note.innerText);
        }
        else {
        results.push(note.closest(this.parentClass).dataset.fret);
        }
      }
    }
    return results.reverse();
  }

  getSelectedNotesOnString (stringIndex) {
    const items =  document.querySelectorAll('p[data-string="'+stringIndex+'"].selected-note');
    return Array.prototype.slice.call(items);
  }

  attachEvents() {
    const elements = document.querySelectorAll(".js-fret > div > p");
    
    for(let i =0; i < elements.length; i++){
      const elem = elements[i];   
      elem.onclick = this.onClick.bind(this);
    } 
  }

}

module.exports = Notes;
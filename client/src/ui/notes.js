class Notes {
  constructor(domState, observers) {
    this.attachEvents();
    this.domState = domState;
    this.maxSelection = 6;
    this.observers = observers;
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
    var currentlySelected = this.domState.elementsOfClass(this.selectedClass);

    for(var observer of this.observers){
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
    var stringNumber = element.dataset.string;
    var selectedAlready = this.getSelectedNotesOnString(stringNumber);
    var collision = false;
    for(var note of selectedAlready) {
      if(this.isSameNote(element, note)) continue;
      this.domState.removeClass(this.selectedClass, note.classList);
      this.resetLetter(note);
    }
    return collision;
  }

  isSameNote(clickedElement, noteToCheck) {
    var fretNumber = clickedElement.closest(this.parentClass).dataset.fret;
    return noteToCheck.closest('.js-fret').dataset.fret == fretNumber;
  }

  getNotes(selectedNotes) {
    var results = [];
    for(var i = 1; i<7; i++){
      var playedNotes = this.getSelectedNotesOnString(i);
        
      for(var note of playedNotes) {
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
    var items =  document.querySelectorAll('p[data-string="'+stringIndex+'"].selected-note');
    return Array.prototype.slice.call(items);
  }

  attachEvents() {
    var elements = document.querySelectorAll(".js-fret > div > p");
    
    for(var i =0; i < elements.length; i++){
      var elem = elements[i];   
      elem.onclick = this.onClick.bind(this);
    } 
  }

}

module.exports = Notes;
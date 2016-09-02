var Notes = function(domState, observers){
  this.attachEvents();
  this.selectedClass = "selected-note";
  this.domState = domState;
  this.maxSelection = 6;
  this.observers = observers;
  this.parentClass = ".js-fret";
}

Notes.prototype = {
  onClick: function(e){
    var target = e.currentTarget;
    this.clearString(target);

    this.domState.toggleClass(this.selectedClass, target.classList, this.maxSelection)
    this.notifyObservers();
  },
  notifyObservers: function(){
   var currentlySelected = this.domState.elementsOfClass(this.selectedClass);

   if(!this.maxNotesReached(currentlySelected)) return;

   for(var observer of this.observers){
     observer.notify({
        notesSelected: this.getNotes(currentlySelected)
     });
   }
  },
  maxNotesReached: function(currentlySelected){
    return currentlySelected.length == this.maxSelection
  },
  clearString: function(element){
    var stringNumber = element.dataset.string;
    var selectedAlready = this.getSelectedNotesOnString(stringNumber);
    var collision = false;
    for(var note of selectedAlready) {
      if(this.isSameNote(element, note)) continue;
      this.domState.removeClass(this.selectedClass, note.classList);
    }
    return collision;
  },
  isSameNote: function(clickedElement, noteToCheck){
    var fretNumber = clickedElement.closest(this.parentClass).dataset.fret;
    return noteToCheck.closest('.js-fret').dataset.fret == fretNumber;
  },
  getNotes: function(selectedNotes){
    var results = [];
    for(var i = 1; i<7; i++){
      var playedNotes = this.getSelectedNotesOnString(i);
      for(var note of playedNotes) {
        results.push(note.closest(this.parentClass).dataset.fret);
      }
    }
    return results.reverse();
  },
  getSelectedNotesOnString: function(stringIndex) {
    return document.querySelectorAll('p[data-string="'+stringIndex+'"].selected-note');
  },
  attachEvents: function(){
    var elements = document.querySelectorAll(".js-fret > div > p");
    
    for(var i =0; i < elements.length; i++){
      var elem = elements[i];   
      elem.onclick = this.onClick.bind(this);
    } 
  }
}

module.exports = Notes;
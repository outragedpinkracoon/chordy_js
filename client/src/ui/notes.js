var Notes = function(domState, observers){
  this.attachEvents();
  this.selectedClass = "selected-note";
  this.domState = domState;
  this.maxSelection = 6;
  this.observers = observers;
}

Notes.prototype = {
  onClick: function(e){
    var target = e.currentTarget;
    var thing = this.stringAlreadySelected(target);
    if(thing) return;

    this.domState.toggleClass(this.selectedClass, target.classList, this.maxSelection)
    
    var currentlySelected = this.domState.elementsOfClass(this.selectedClass);
    this.notify({
      maxReached: currentlySelected.length == this.maxSelection,
      notesSelected: this.getNotes(currentlySelected)
    });
  },
  stringAlreadySelected: function(element){
    var stringNumber = element.dataset.string;
    var fretNumber = element.closest('.js-fret').dataset.fret;

    var selectedAlready = this.getSelectedNotesOnString(stringNumber);
    var collision = false;
    for(var note of selectedAlready) {
      if(note.closest('.js-fret').dataset.fret == fretNumber) continue;
      collision = true;
    }
    return collision;
  },
  getNotes: function(selectedNotes){
    // var results = [];
    // for(var i = 1; i<7; i++){
    //   var playedNotes = this.getSelectedNotesOnString(i);
    //   for(var note of playedNotes) {
    //     results.push(note.innerText);
    //   }
    // }
    // console.log(results);
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
  },
  notify: function( context ){
    var observerCount = this.observers.length;
    for(var observer of this.observers){
      observer.notify( context );
    }
  }
}

module.exports = Notes;
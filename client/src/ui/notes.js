var Notes = function(domState, observers){
  this.attachEvents();
  this.selectedClass = "selected-note";
  this.domState = domState;
  this.maxSelection = 6;
  this.observers = observers;
}

Notes.prototype = {
  onClick: function(e){
    this.domState.toggleClass(this.selectedClass, e.currentTarget.classList, this.maxSelection)
    var currentlySelected = this.domState.elementsOfClass(this.selectedClass);
    this.notify({
      maxReached: currentlySelected.length == this.maxSelection,
      notesSelected: this.getNotes(currentlySelected)
    });
  },
  getNotes: function(selectedNotes){
    var results = [];
    for(element of selectedNotes) {
      results.push[element.innerText];
    }
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
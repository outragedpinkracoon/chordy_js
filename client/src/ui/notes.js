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
    var currentlySelected = this.domState.countClass(this.selectedClass);
    this.notify({
      maxReached: currentlySelected == this.maxSelection
    });
  },
  removeClass: function(classesOnElement){
    classesOnElement.remove(this.selectedClass);
  },
  classIsSelected: function(classesOnElement){
    return classesOnElement.contains(this.selectedClass);
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
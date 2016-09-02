var Notes = function(){
  this.attachEvents();
  this.selectedClass = "selected-note";
}

Notes.prototype = {
  onClick: function(e){
    var selectedAlready = document.querySelectorAll("."+this.selectedClass);
    var classesOnElement = e.currentTarget.classList;
    if(this.classIsSelected(classesOnElement)) {
      this.removeClass(classesOnElement);
      return;
    }
    if(selectedAlready.length >= 6) return;
    classesOnElement.add(this.selectedClass);
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
}

module.exports = Notes;
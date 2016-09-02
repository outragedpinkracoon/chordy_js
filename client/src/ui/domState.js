var DomState = function(){

}

DomState.prototype ={
  toggleClass: function(classToFind, classList, maxSelection){
    if(this.hasClass(classToFind, classList)) {
      this.removeClass(classToFind, classList);
      return;
    }
    if(this.maximumSelected(classToFind, maxSelection)) return;
    this.addClass(classToFind, classList);
  },
  removeClass: function(classToRemove, classList){
    classList.remove(classToRemove);
  },
  maximumSelected: function(classToFind, maxSelection){
    var selectedAlready = this.elementsOfClass(classToFind);
    return selectedAlready.length >= maxSelection;
  },
  countClass: function(classToFind){
    return this.elementsOfClass(classToFind).length;
  },
  addClass: function(classToAdd, classList){
    classList.add(classToAdd);
  },  
  doesNotHaveClass: function(classToFind, classList){
    return !this.hasClass(classToFind, classList);
  },
  hasClass: function(classToFind, classList) {
    return classList.contains(classToFind);
  },
  elementsOfClass: function(classToFind){
    return document.querySelectorAll("."+classToFind);
  }
}

module.exports = DomState;
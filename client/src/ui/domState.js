class DomState {
  toggleClass(classToFind, classList, maxSelection) {
    if(this.hasClass(classToFind, classList)) {
      this.removeClass(classToFind, classList);
      return;
    }
    if(this.maximumSelected(classToFind, maxSelection)) return;
    this.addClass(classToFind, classList);
  }

  removeClass(classToRemove, classList) {
    classList.remove(classToRemove);
  }

  removeClasses(classesToRemove, classList) {
    for(const classToRemove of classesToRemove) {
      this.removeClass(classToRemove, classList);
    }
  }

  maximumSelected(classToFind, maxSelection) {
    const selectedAlready = this.elementsOfClass(classToFind);
    return selectedAlready.length >= maxSelection;
  }

  countClass(classToFind) {
    return this.elementsOfClass(classToFind).length;
  }

  addClass(classToAdd, classList) {
    classList.add(classToAdd);
  }

  addClasses(classesToAdd, classList) {
    for(const classToAdd of classesToAdd) {
      this.addClass(classToAdd, classList);
    }
  }

  doesNotHaveClass(classToFind, classList) {
    return !this.hasClass(classToFind, classList);
  }

  hasClass(classToFind, classList) {
    return classList.contains(classToFind);
  }
  
  elementsOfClass(classToFind) {
    return document.querySelectorAll("."+classToFind);
  }
}

module.exports = DomState;
//THIS WHOLE CLASS NEEDS WORK! Storing state in the instance variable
// like this is bloody awful.
class NoteLookup {
  constructor() {
    this.notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    this.interval = 0;
    this.currentLocation = 0;
  }

  noteIndex (note) {
    return this.notes.indexOf(note);
  }

  noteInterval (rootNoteIndex, noteToFind) {
    this.interval = 0;
    this.currentLocation = rootNoteIndex;

    var found = this.matchRootToEnd(noteToFind);
    if (found) return this.interval;
    
    this.currentLocation = 0;
    found = this.matchStartOfArrayToRoot(noteToFind, rootNoteIndex);

    return found ? this.interval : -1;
	}

  matchRootToEnd(noteToFind) {
    return this.match(noteToFind, this.notes.length);
	}

  matchStartOfArrayToRoot(noteToFind, previousStartPoint) {
    return this.match(noteToFind, previousStartPoint);
	}
  
  match(noteToFind, endPointOfSearch) {
    var found = false;
    while (this.currentLocation < endPointOfSearch) {
      var currentNote = this.notes[this.currentLocation];
      if (noteToFind === currentNote) {
        found = true;
        break;
      }
      this.interval += 1;
      this.currentLocation += 1;
    }
    return found;
	}
}

module.exports = NoteLookup;
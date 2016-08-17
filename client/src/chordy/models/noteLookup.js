var NoteLookup = function() {
  this.notes =["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  this.interval = 0;
}

NoteLookup.prototype = {
  noteIndex: function(note) {
    return this.notes.indexOf(note);
  },
  noteInterval:function(rootNoteIndex, noteToFind)
  {
    this.interval = 0;
    var currentLocation = rootNoteIndex;
    var found = this.matchRootToEnd(noteToFind);

    if (found) return interval;
    currentLocation = 0;

    found = this.matchStartOfArrayToRoot(noteToFind, rootNoteIndex);

    if (found) return interval;
    return -1;
  },
  matchRootToEnd: function(noteToFind) {
    return this.match(noteToFind, notes.Count);
  },
  matchStartOfArrayToRoot: function(noteToFind, previousStartPoint) {
    return this.match(noteToFind, previousStartPoint);
  },
  match(noteToFind, endPointOfSearch) {
    while (currentLocation < endPointOfSearch) {
     var currentNote = notes[currentLocation];
     if (noteToFind == currentNote) return true;
     this.interval += 1;
     currentLocation += 1;
   }
   return false;
 }
}

module.exports = NoteLookup;
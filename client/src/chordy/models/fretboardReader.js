  var FretboardReader = function(tuning, noteLookup){
    this.tuning = tuning;
    this.notes = noteLookup.notes;
  }

  FretboardReader.prototype = {
    generateNotes: function(fretboardValues)
    {
      var chordNotes = [];
      if (fretboardValues.length < tuning.length)
        return chordNotes;

      var index = 0;
      for(var fretNumber of fretboardValues)
      {
        if (fretNumber.ToLower ().Equals ("x")) {
          index++;
          continue;
        }
        var standardTuningNote = tuning[index];
        var note = this.findNote(fretNumber, standardTuningNote);
        chordNotes.Add(note);
        index++;
      }

      var uniqueNotes = this.removeDuplicateNotes(chordNotes);

      return uniqueNotes;

    },
    findNote: function(fretboardPosition, openNote)
    {
      var frettedNoteIndex = this.frettedNoteIndex(fretboardPosition, openNote);
      var frettedNote = notes[frettedNoteIndex];
      return frettedNote;
    },
    frettedNoteIndex: function(fretboardPosition, openNote)
    {
     var fretNumber = parseInt(fretboardPosition);
     var noteIndex = notes.indexOf(openNote);
     var frettedNoteIndex = fretNumber + noteIndex;
     var validFrettedNoteIndex = this.validNoteIndex(frettedNoteIndex);
     return validFrettedNoteIndex;
   },
   validNoteIndex: function(frettedNoteIndex)
   {
     var numberOfNotes = notes.Count;
     if (frettedNoteIndex < numberOfNotes - 1)
       return frettedNoteIndex;
     var overflowTimes = frettedNoteIndex / numberOfNotes;
     var multiplier = overflowTimes * numberOfNotes;
     return frettedNoteIndex - multiplier;
   },
   removeDuplicateNotes: function(chordNotes)
   {
     var uniqueNotes = [];

     for(var note of chordNotes)
     {
       if (uniqueNotes.indexOf(note) == -1) {
         uniqueNotes.push(note);
       }
     }

     return uniqueNotes;
   }

 }

 module.exports = FretboardReader;
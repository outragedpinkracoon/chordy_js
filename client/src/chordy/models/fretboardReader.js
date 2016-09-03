class FretboardReader {

  constructor(tuning, noteLookup) {
    this.tuning = tuning;
    this.notes = noteLookup.notes;
  }
  
  generateNotes(fretboardValues) {
    const chordNotes = [];
    if (fretboardValues.length < this.tuning.length) return chordNotes;

    let index = 0;
    for(const fretNumber of fretboardValues) {
      if (fretNumber.toLowerCase() ==="x") {
        index++;
        continue;
      }
      const standardTuningNote = this.tuning[index];
      const note = this.findNote(fretNumber, standardTuningNote);
      chordNotes.push(note);
      index++;
    }

    const uniqueNotes = this.removeDuplicateNotes(chordNotes);
    return uniqueNotes;

  }

  findNote(fretboardPosition, openNote) {
    const frettedNoteIndex = this.frettedNoteIndex(fretboardPosition, openNote);
    const frettedNote = this.notes[frettedNoteIndex];
    return frettedNote;
  }

  frettedNoteIndex (fretboardPosition, openNote) {
    const fretNumber = parseInt(fretboardPosition);
    const noteIndex = this.notes.indexOf(openNote);
    const frettedNoteIndex = fretNumber + noteIndex;
    const validFrettedNoteIndex = this.validNoteIndex(frettedNoteIndex);
    return validFrettedNoteIndex;
  }

  validNoteIndex(frettedNoteIndex) {
    const numberOfNotes = this.notes.length;
    if (frettedNoteIndex < numberOfNotes - 1) return frettedNoteIndex;
    const overflowTimes = Math.floor(frettedNoteIndex / numberOfNotes);
    const multiplier = overflowTimes * numberOfNotes;
    return frettedNoteIndex - multiplier;
  }

  removeDuplicateNotes(chordNotes) {
    const uniqueNotes = [];
    for(const note of chordNotes) {
      if (uniqueNotes.indexOf(note) == -1) {
        uniqueNotes.push(note);
      }
    }
    return uniqueNotes;
  }

}

module.exports = FretboardReader;
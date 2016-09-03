const ChordFinder = require('./chordFinder');
const FretboardReader = require('./fretboardReader');
const NoteLookup = require('./noteLookup');
const ChordLookup = require('./chordLookup');

class ChordyRunner {
  constructor() { 
    this.noteLookup = new NoteLookup();
    this.reader = new FretboardReader(["E", "A", "D", "G", "B", "E"], this.noteLookup);
    this.chordFinder = new ChordFinder(this.noteLookup);
    this.chordLookup = new ChordLookup();
  }

  findChord(fretboardConfig) {
    const chordNotes = this.reader.generateNotes(fretboardConfig);
    const rootNoteIndex = this.chordFinder.rootNoteIndex(chordNotes);
    const intervalsArray = this.chordFinder.noteIntervals(chordNotes, rootNoteIndex);
    const rootNote = this.noteLookup.notes[rootNoteIndex];
    const chord = this.chordLookup.findChord(intervalsArray, rootNote);
    return chord;
  }
}
module.exports = ChordyRunner
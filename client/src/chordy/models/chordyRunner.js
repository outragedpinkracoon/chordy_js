var ChordFinder = require('./chordFinder');
var FretboardReader = require('./fretboardReader');
var NoteLookup = require('./noteLookup');
var ChordLookup = require('./chordLookup');

class ChordyRunner {
  constructor() { 
    this.noteLookup = new NoteLookup();
    this.reader = new FretboardReader(["E", "A", "D", "G", "B", "E"], this.noteLookup);
    this.chordFinder = new ChordFinder(this.noteLookup);
    this.chordLookup = new ChordLookup();
  }

  findChord(fretboardConfig) {
    var chordNotes = this.reader.generateNotes(fretboardConfig);
    var rootNoteIndex = this.chordFinder.rootNoteIndex(chordNotes);
    var intervalsArray = this.chordFinder.noteIntervals(chordNotes, rootNoteIndex);
    var rootNote = this.noteLookup.notes[rootNoteIndex];
    var chord = this.chordLookup.findChord(intervalsArray, rootNote);
    return chord;
  }
}
module.exports = ChordyRunner
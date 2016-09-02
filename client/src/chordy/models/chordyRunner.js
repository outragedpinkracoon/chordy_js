var ChordFinder = require('./chordFinder');
var FretboardReader = require('./fretboardReader');
var NoteLookup = require('./noteLookup');
var ChordLookup = require('./chordLookup');

var ChordyRunner = function() {
  this.noteLookup = new NoteLookup();
  this.reader = new FretboardReader(["E", "A", "D", "G", "B", "E"], this.noteLookup);
  this.chordFinder = new ChordFinder(this.noteLookup);
  this.chordLookup = new ChordLookup();
}
ChordyRunner.prototype = {
  findChord: function(fretboardConfig){
    var chordNotes = this.reader.generateNotes(fretboardConfig);
    var rootNoteIndex = this.chordFinder.rootNoteIndex(chordNotes);
    var intervalsArray = this.chordFinder.noteIntervals(chordNotes, rootNoteIndex);
    var rootNote = this.noteLookup.notes[rootNoteIndex];
    var chord = this.chordLookup.findChord(intervalsArray, rootNote);
    return chord;
  },
  notify: function(context){
    console.log(context);
  }
}
module.exports = ChordyRunner
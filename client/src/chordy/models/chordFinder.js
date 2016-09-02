var ChordFinder = function(noteLookup) {
  this.lookup = noteLookup
}
ChordFinder.prototype = {
    findChord: function(chordNotes) {
			if (chordNotes.length == 1) return chordNotes[0];
			var index = this.rootNoteIndex(chordNotes);
			return index.toString();
		},
    rootNoteIndex: function(chordNotes) {
			var rootNote = chordNotes[0];
			return this.lookup.noteIndex(rootNote);
		},
    noteIntervals(chordNotes, rootNoteIndex)
		{
			var chordArray = []
			for (var note of chordNotes) {
				var noteInterval = this.lookup.noteInterval(rootNoteIndex, note);
				chordArray.push(noteInterval);
			}
			return chordArray.sort(function(a, b){
				return parseInt(a)- parseInt(b)}
			);
		}
}
module.exports = ChordFinder

	
class ChordFinder {
	constructor(noteLookup) {
		this.lookup = noteLookup
	}

  findChord(chordNotes) {
		if (chordNotes.length == 1) return chordNotes[0];
		const index = this.rootNoteIndex(chordNotes);
		return index.toString();
	}

  rootNoteIndex(chordNotes) {
		const rootNote = chordNotes[0];
		return this.lookup.noteIndex(rootNote);
	}

  noteIntervals(chordNotes, rootNoteIndex)
	{
		const chordArray = []
		for (const note of chordNotes) {
			const noteInterval = this.lookup.noteInterval(rootNoteIndex, note);
			chordArray.push(noteInterval);
		}
		return chordArray.sort(function(a, b){
			return parseInt(a)- parseInt(b)}
		);
	}
}
module.exports = ChordFinder

	
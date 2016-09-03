class ChordLookup {
  constructor() {
    this.chordDictionary = {
      "0-4-7":"Major",
      "0-3-7":"Minor",
      "0-4-7-11":"Major Seventh",
      "0-2-7":"Suspended Second",
      "0-5-7":"Suspended Fourth",
      "0-3-7-10":"Minor Seventh",
      "0-4-7-10":"Dominant Seventh"
    };
  }

  convertToKey (intervalsArray) {
    return intervalsArray.join("-");
  }

  findChord (intervalsArray, rootNote) {
    let result = rootNote + " ";
    const key = this.convertToKey(intervalsArray);
    const chord = this.chordDictionary[key]
    result = chord ? result + chord : "Chord not found";
    return result;
  }
}
module.exports = ChordLookup
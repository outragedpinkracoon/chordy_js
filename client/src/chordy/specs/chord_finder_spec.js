var assert = require('assert');
var ChordFinder = require('../models/chordFinder');
var NoteLookup = require('../models/noteLookup');


describe('fretboard reader', function () {

  beforeEach(function () {
    var lookup = new NoteLookup();
    this.finder = new ChordFinder(lookup);
  });

  it('should return same note for single note', function () {
    var input = ["C"];
    var result = this.finder.findChord(input);
    assert.equal(result, "C");
  });

  it('should return index of root note', function () {
    var input = ["C", "E", "G" ];
    var result = this.finder.rootNoteIndex(input);
    assert.equal(result, 3);
  });

  it('should return note intervals', function () {
    var input = ["C", "E", "G" ];
    var rootNoteIndex = 3;
    var result = this.finder.noteIntervals(input, rootNoteIndex);
    assert.deepEqual(result, [0, 4, 7]);
  });
})

// 		[Test]
// 		public void TestNoteIntervalsLooping()
// 		{
// 			var chordNotes = new List<string> { "G", "B", "D" };
// 			var rootNoteIndex = 10;
// 			var result = finder.NoteIntervals(chordNotes, rootNoteIndex);
// 			Assert.That(result, Is.EqualTo(new List<int> { 0, 4, 7 }));
// 		}

// 	}
// }

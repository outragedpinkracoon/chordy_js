var assert = require('assert');
var FretboardReader = require('../models/fretboardReader');
var NoteLookup = require('../models/noteLookup');

describe('fretboard reader', function () {

  beforeEach(function () {
    var lookup = new NoteLookup();
    var tuning = ["E", "A", "D", "G", "B", "E"];
    this.reader = new FretboardReader(tuning, lookup);
  });

  it('should return empty list for invalid note quantity', function () {
    assert.equal(true, true);
    var input = ["x", "x", "x", "x"];
    var result = this.reader.generateNotes(input);
    assert.equal(result.length, 0);
  });

  it('should return empty list for all lower X notes', function () {
    assert.equal(true, true);
    var input = ["x", "x", "x", "x", "x", "x"];
    var result = this.reader.generateNotes(input);
    assert.equal(result.length, 0);
  });

  it('should return empty list for all upper X notes', function () {
    assert.equal(true, true);
    var input = ["X", "X", "X", "X", "X", "X"];
    var result = this.reader.generateNotes(input);
    assert.equal(result.length, 0);
  });

  it('should remove duplicate notes', function () {
    assert.equal(true, true);
    var input = ["F", "F", "A"];
    var result = this.reader.removeDuplicateNotes(input);
    assert.deepEqual(result, ["F", "A"]);
  });

  it('should return correct fretted note index for 0', function () {
    var result = this.reader.frettedNoteIndex("0", "E");
    assert.equal(result, 7);
  });

  it('should return correct fretted note index for input 0', function () {
    var result = this.reader.frettedNoteIndex("0", "E");
    assert.equal(result, 7);
  });

  it('should return correct fretted note index for input 2', function () {
    var result = this.reader.frettedNoteIndex("2", "E");
    assert.equal(result, 9);
  });

  it('should return original note when input is less than maximum possible note index', function () {
    var result = this.reader.validNoteIndex(2);
    assert.equal(result, 2);
  });

  it('should return first note index when input is one more than than maximum possible note index', function () {
    var result = this.reader.validNoteIndex(12);
    assert.equal(result, 0);
  });

  it('should return index 4 when input is 5 more than than maximum possible note index', function () {
    var result = this.reader.validNoteIndex(16);
    assert.equal(result, 4);
  });

  it('should return index 2 when input is 15 more than than maximum possible note index', function () {
    var result = this.reader.validNoteIndex(26);
    assert.equal(result, 2);
  });

  it('should generate notes', function () {
    var result = this.reader.generateNotes(["3", "2", "0", "0", "3", "3"]);
    assert.deepEqual(result, ["G", "B", "D"]);
  });

  it('should generate muted notes', function () {
    var result = this.reader.generateNotes(["X", "3", "2", "0", "1", "0" ]);
    assert.deepEqual(result, ["C", "E", "G"]);
  });


  it('should generate muted overflow notes', function () {
    var result = this.reader.generateNotes(["X", "15", "17", "17", "0", "0"]);
    assert.deepEqual(result, ["C", "G", "B", "E"]);
  });

})
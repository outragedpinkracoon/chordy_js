var assert = require('assert');
var ChordyRunner = require('../models/chordyRunner');

describe('chordy runner', function () {
  var runner;
  beforeEach(function () {
    runner = new ChordyRunner();
  });

  it('should return C Major', function () {
    var result = runner.findChord(["X", "3", "2", "0", "1", "0"]);
    assert.equal(result, "C Major");
  });  

  it('should return A Minor', function () {
    var result = runner.findChord(["X", "0", "2", "2", "1", "0"]);
    assert.equal(result, "A Minor");
  });  

  it('should return G Suspended Fourth', function () {
    var result = runner.findChord(["3", "3", "0", "0", "1", "3"]);
    assert.equal(result, "G Suspended Fourth");
  });

  it('should return G Dominant Seventh', function () {
    var result = runner.findChord(["3", "2", "0", "0", "0", "1"]);
    assert.equal(result, "G Dominant Seventh");
  });

  it('should return chord not found', function () {
    var result = runner.findChord(["9", "3", "0", "0", "1", "3"]);
    assert.equal(result, "Chord not found");
  });

});
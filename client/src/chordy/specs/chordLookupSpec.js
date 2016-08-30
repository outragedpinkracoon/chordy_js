var assert = require('assert');
var ChordLookup = require('../models/chordLookup');

describe('chord lookup', function () {
  var lookup;
  beforeEach(function () {
    lookup = new ChordLookup();
  });

  it('should convert intervals to key', function () {
    var input = [0,4,7];
    var result = lookup.convertToKey(input);
    assert.equal(result, "0-4-7");
  });


  it('should lookup major chord', function () {
    var result = lookup.findChord([0,4,7], "C");
    assert.equal(result, "C Major");
  });

  it('should lookup minor chord', function () {
    var result = lookup.findChord([0,3,7], "A");
    assert.equal(result, "A Minor");
  });

});
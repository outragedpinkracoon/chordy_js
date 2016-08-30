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

});
var assert = require('assert');
var FretboardReader = '../models/fretboardReader';
var Test = '../models/noteLookup';

describe('fretboard reader', function(){

  beforeEach(function() {
    this.lookup = new NoteLookup();
    this.tuning = ["E", "A", "D", "G", "B", "E" ];
    this.reader = new FretboardReader(tuning, lookup);
  });

  it('InvalidNoteQuantityShouldReturnEmptyList', function(){
    assert.equal(true, true);
    var input = ["x", "x", "x", "x"];
    var result = this.reader.generateNotes(input);
    assert.equal(result.length,0);
  });


  // [Test]
  // public void AllLowerXNotesReturnsEmptyList()
  // {
  //   var input = new List<string>() { "x", "x", "x", "x", "x", "x" };
  //   var result = reader.GenerateNotes(input);
  //   Assert.That(result, Is.Empty);
  // }

  // [Test]
  // public void WithUpperXNotesReturnsEmpty()
  // {
  //   var input = new List<string>() { "X", "x", "X", "x", "X", "x" };
  //   var result = reader.GenerateNotes(input);
  //   Assert.That(result, Is.Empty);
  // }

  // [Test]
  // public void ShouldRemoveDuplicateNotes()
  // {
  //   var input = new List<string>() { "F", "F", "A" };
  //   var result = reader.RemoveDuplicateNotes(input);
  //   Assert.That(result, Is.EqualTo(new List<string>() { "F", "A" }));
  // }

  // [Test]
  // public void FrettedNoteIndexReturnsCorrectValueFor0()
  // {
  //   var result = reader.FrettedNoteIndex("0", "E");
  //   Assert.That(result, Is.EqualTo(7));
  // }

  // [Test]
  // public void FrettedNoteIndexReturnsCorrectValueFor2()
  // {
  //   var result = reader.FrettedNoteIndex("2", "E");
  //   Assert.That(result, Is.EqualTo(9));
  // }

  // [Test]
  // public void ValidNoteIndexLessThanMaxLengthOfNotes()
  // {
  //   var result = reader.ValidNoteIndex(2);
  //   Assert.That(result, Is.EqualTo(2));
  // }

  // [Test]
  // public void ValidNoteIndexLastItemPlus1()
  // {
  //   var result = reader.ValidNoteIndex(12);
  //   Assert.That(result, Is.EqualTo(0));
  // }


  // [Test]
  // public void ValidNoteIndexLastItemPlus5()
  // {
  //   var result = reader.ValidNoteIndex(16);
  //   Assert.That(result, Is.EqualTo(4));
  // }

  // [Test]
  // public void ValidNoteIndexLastItemPlus15()
  // {
  //   var result = reader.ValidNoteIndex(26);
  //   Assert.That(result, Is.EqualTo(2));
  // }

  // [Test]
  // public void ShouldGenerateNotes()
  // {
  //   var result = reader.GenerateNotes(new List<string> { "3", "2", "0", "0", "3", "3" });
  //   Assert.That(result, Is.EqualTo(new List<string> { "G", "B", "D" }));
  // }

  // [Test]
  // public void ShouldGenerateNotes_Muted()
  // {
  //   var result = reader.GenerateNotes(new List<string> { "X", "3", "2", "0", "1", "0" });
  //   Assert.That(result, Is.EqualTo(new List<string> { "C", "E", "G" }));
  // }

  // [Test]
  // public void ShouldGenerateNotes_Muted_Overflow()
  // {
  //   var result = reader.GenerateNotes(new List<string> { "X", "15", "17", "17", "0", "0" });
  //   Assert.That(result, Is.EqualTo(new List<string> { "C", "G", "B", "E" }));
  // }

})
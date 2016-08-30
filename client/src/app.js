var ChordyRunner = require('./chordy/models/chordyRunner')
window.onload = function () {
  var chordy = new ChordyRunner();
  var result = chordy.findChord(["X", "3", "2", "0", "1", "0"]);

}
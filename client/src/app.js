var ChordyRunner = require('./chordy/models/chordyRunner')
window.onload = function () {
  var chordy = new ChordyRunner();
  var result = chordy.findChord(["X", "3", "2", "0", "1", "0"]);
  console.log(result);
  var elements = document.querySelectorAll(".js-fret > div > p");
  
  for(var i =0; i < elements.length; i++){
    var elem = elements[i];   
    elem.onclick = function(e){
      alert(e.currentTarget.innerText);
      return false;
    };
  }
  
}
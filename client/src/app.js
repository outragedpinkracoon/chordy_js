var Handlebars = require('handlebars');
var ChordyRunner = require('./chordy/models/chordyRunner')
window.onload = function () {
  createFretboard();

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

  function createFretboard() {
    var source = document.getElementById("fret-template").innerHTML;
    var template = Handlebars.compile(source);
    var neck = document.getElementById("neck");
    var notes = [
      {key:"a", value:"e"},
      {key:"b", value:"b"},
      {key:"c", value:"g"},
      {key:"d", value:"d"},
      {key:"e", value:"a"},
      {key:"f", value:"e"},
    ];

    for(var i = 1; i < 23;i++){
      var context = {fret_id:i, notes: notes}
      var html = template(context);

      neck.innerHTML = neck.innerHTML + html;
    }
  }
  
}
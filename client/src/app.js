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
      {string:"1", value:"e"},
      {string:"2", value:"b"},
      {string:"3", value:"g"},
      {string:"4", value:"d"},
      {string:"5", value:"a"},
      {string:"6", value:"e"},
      {string:"spacer"}
    ];

    for(var i = 0; i < 22;i++){
      var context = {fret_id:(i + 1), notes: notes}
      var html = template(context);

      neck.innerHTML = neck.innerHTML + html;
    }
  }
  
}
var Handlebars = require('handlebars');

var Fretboard = function(){
  this.notes = [
    {string:"1", value:"e"},
    {string:"2", value:"b"},
    {string:"3", value:"g"},
    {string:"4", value:"d"},
    {string:"5", value:"a"},
    {string:"6", value:"e"},
    {string:"spacer"} //yuck, this it to add the first space to the left of each fret
  ];
  this.render();
  this.attachEvents();
}

Fretboard.prototype = {
  render: function() {
    var source = document.getElementById("fret-template").innerHTML;
    var template = Handlebars.compile(source);
    var neck = document.getElementById("neck");

    for(var i = 0; i < 22;i++) {
      var context = {fret_id:(i + 1), notes: this.notes}
      var html = template(context);
      neck.innerHTML = neck.innerHTML + html;
    }
  },
  attachEvents: function(){
    var elements = document.querySelectorAll(".js-fret > div > p");
    
    for(var i =0; i < elements.length; i++){
      var elem = elements[i];   
      elem.onclick = this.noteOnClick;
    } 
  },
  noteOnClick: function(e){
    var selectedClass = "selected-note";
    var selectedAlready = document.querySelectorAll("."+selectedClass);
    var classesOnElement = e.currentTarget.classList;
    if(classesOnElement.contains(selectedClass)) {
      classesOnElement.remove(selectedClass);
      return;
    }
    if(selectedAlready.length >= 6) return;
    classesOnElement.add(selectedClass);
  }
}

module.exports = Fretboard;
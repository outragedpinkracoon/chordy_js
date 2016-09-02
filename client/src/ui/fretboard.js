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
  }

}

module.exports = Fretboard;
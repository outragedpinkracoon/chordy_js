var Fretboard = function(templateEngine){
  this.templateEngine = templateEngine;
  this.notes = [
    {string:"1", value:"e"},
    {string:"2", value:"b"},
    {string:"3", value:"g"},
    {string:"4", value:"d"},
    {string:"5", value:"a"},
    {string:"6", value:"e"},
    {string:"spacer"} //yuck, this it to add the first space to the left of each fret
  ];
  this.templateEngine.setSource("fret-template");
  this.render();
  
}

Fretboard.prototype = {
  render: function() {
    var neck = document.getElementById("neck");
    for(var i = 0; i < 22;i++) {
      var context = {fret_id:(i + 1), notes: this.notes}
      this.templateEngine.render(context, neck);
    }
  }

}

module.exports = Fretboard;
var Fretboard = function(templateEngine){
  this.templateEngine = templateEngine;
  this.notes = [
    {string:"1", value:"E"},
    {string:"2", value:"B"},
    {string:"3", value:"G"},
    {string:"4", value:"D"},
    {string:"5", value:"A"},
    {string:"6", value:"E"},
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
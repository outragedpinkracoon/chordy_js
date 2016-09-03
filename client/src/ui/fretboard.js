class Fretboard {
  constructor(templateEngine){
    this.templateEngine = templateEngine;
    this.notes = [
      {string:"1", value:" "},
      {string:"2", value:" "},
      {string:"3", value:" "},
      {string:"4", value:" "},
      {string:"5", value:" "},
      {string:"6", value:" "},
      {string:"spacer"} //yuck, this it to add the first space to the left of each fret
    ];
    this.templateEngine.setSource("fret-template");
    this.render();
  }

  render() {
    var neck = document.getElementById("neck");
    for(var i = 0; i < 22;i++) {
      var context = {fret_id:(i + 1), notes: this.notes}
      this.templateEngine.render(context, neck);
    }
  }
  
}

module.exports = Fretboard;
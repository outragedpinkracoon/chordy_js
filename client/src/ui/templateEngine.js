var Handlebars = require('handlebars');

var TemplateEngine = function(){
}

TemplateEngine.prototype = {
  setSource: function(templateSource){
    var source = document.getElementById(templateSource).innerHTML;
    this.template = Handlebars.compile(source);
  },
  render: function(context, rootNode){
    var html = this.template(context);
    rootNode.innerHTML = rootNode.innerHTML + html;
  }
}

module.exports = TemplateEngine;
var Handlebars = require('handlebars');

class TemplateEngine {
  setSource(templateSource) {
    var source = document.getElementById(templateSource).innerHTML;
    this.template = Handlebars.compile(source);
  }

  render(context, rootNode) {
    var html = this.template(context);
    rootNode.innerHTML = rootNode.innerHTML + html;
  }
}

module.exports = TemplateEngine;
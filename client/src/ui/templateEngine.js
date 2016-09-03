const Handlebars = require('handlebars');

class TemplateEngine {
  setSource(templateSource) {
    const source = document.getElementById(templateSource).innerHTML;
    this.template = Handlebars.compile(source);
  }

  render(context, rootNode) {
    const html = this.template(context);
    rootNode.innerHTML = rootNode.innerHTML + html;
  }
}

module.exports = TemplateEngine;
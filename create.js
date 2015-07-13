var tohtml = require('vdom-to-html')

module.exports = function createTemplate (template) {
  var template = template
  var html = tohtml(template)
  template.toHTML = function createTemplate_toHTML () { return html }
  return template
}
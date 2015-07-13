var h = require('virtual-dom/h')
var create = require('../create')

module.exports = function (options) {
  options || (options = {})

  return create(h('footer', [
    h('div.container', options.children)
  ]))
}

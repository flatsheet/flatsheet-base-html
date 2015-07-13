var h = require('virtual-dom/h')
var create = require('../create')

module.exports = function (options) {
  options || (options = {})

  var nav = [
    h('li', [ h('a', { 'href': '/'}, 'dashboard') ]),
    h('li', [ h('a', { 'href': '/docs'}, 'docs') ]),
    h('li', [ h('a', { 'href': '/about'}, 'about') ])
  ]

  if (options.override && options.children) nav = options.children
  else if (options.children) nav.concat(options.children)
  return create(h('ul.main-nav', nav))
}

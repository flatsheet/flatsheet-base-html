var h = require('virtual-dom/h')
var create = require('../create')

module.exports = function (options) {
  options || (options = {})

  var nav = [
    h('li', [ h('a', { 'href': 'http://github.com/flatsheet', 'target': '_blank'}, [ h('i.fa.fa-github'), 'GitHub' ]) ]),
    h('li', [ h('a', { 'href': 'http://twitter.com/flatsheet', 'target': '_blank'}, [ h('i.fa.fa-twitter'), 'Twitter' ]) ])
  ]

  if (options.override && options.children) nav = options.children
  else if (options.children) nav.concat(options.children)
  return create(h('ul.social-nav', nav))
}

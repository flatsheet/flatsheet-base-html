var h = require('virtual-dom/h')
var create = require('../create')

module.exports = function (options) {
  options || (options = { title: 'flatsheet' })

  return create(h('header', [
    h('div.container', [
      h('h1.site-title', [ 
        h('a', { 'href': '/'}, options.title)
      ]),
      options.children
    ])
  ]))
}

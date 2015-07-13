var h = require('virtual-dom/h')
var create = require('../create')

module.exports = function (options) {
  options || (options = { title: 'flatsheet', body: null })

  var head = [
    h('meta', { 'charset': 'utf-8'}),
    h('title', options.title),
    h('link', { 
      href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,900',
      rel: 'stylesheet'
    }),
    h('link', { 
      href: '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
      rel: 'stylesheet'
    })
  ]

  if (options.head) head.concat(options.head)

  return create(h('html', { 'lang': 'en-us'}, [
    h('head', head),
    h('body', options.body)
  ]))
}

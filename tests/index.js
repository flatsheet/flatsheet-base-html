var fs = require('fs')
var test = require('tape')
var tohtml = require('vdom-to-html')
var h = require('virtual-dom/h')
var views = require('../index')

test('base layout html exists', function (t) {
  var layout = views.layout({ title: 'flatsheet', body: 'flatsheet' })
  var html = fs.readFileSync(__dirname + '/fixtures/layout.html').toString()
  t.equal(layout.toHTML(), html)
  t.end()
})

test('can change layout title', function (t) {
  var layout = views.layout({ title: 'wat', body: 'flatsheet' })
  var html = fs.readFileSync(__dirname + '/fixtures/layout-wat.html').toString()
  t.equal(layout.toHTML(), html)
  t.end()
})

test('can add link tag to head', function (t) {
  var layout = views.layout({
    head: [ h('link', { href: '/public/style.css', rel: 'stylesheet' }) ],
    body: 'flatsheet'
  })
  var html = fs.readFileSync(__dirname + '/fixtures/layout-style.html').toString()
  t.equal(layout.toHTML(), html)
  t.end()
})

test('header html', function (t) {
  var header = views.header()
  var html = fs.readFileSync(__dirname + '/fixtures/header.html').toString()
  t.equal(header.toHTML(), html)
  t.end()
})

test('can change site title in header', function (t) {
  var header = views.header({ title: 'weee' })
  var html = fs.readFileSync(__dirname + '/fixtures/header-weee.html').toString()
  t.equal(header.toHTML(), html)
  t.end()
})

test('base main navigation links', function (t) {
  var nav = views.mainNav()
  var html = fs.readFileSync(__dirname + '/fixtures/main-nav.html').toString()
  t.equal(nav.toHTML(), html)
  t.end()
})

test('can override main navigation links', function (t) {
  var nav = views.mainNav({ override: true, children: [
    h('li', [ h('a', { href: '#wat' }, 'wat') ])
  ]})
  var html = fs.readFileSync(__dirname + '/fixtures/main-nav-override.html').toString()
  t.equal(nav.toHTML(), html)
  t.end()
})

test('base social navigation links', function (t) {
  var nav = views.socialNav()
  var html = fs.readFileSync(__dirname + '/fixtures/social-nav.html').toString()
  t.equal(nav.toHTML(), html)
  t.end()
})

test('can add links to social navigation', function (t) {
  var nav = views.socialNav({
    children: [ h('li', [ h('a', { href: '#wat' }, 'wat') ]) ]
  })
  var html = fs.readFileSync(__dirname + '/fixtures/social-nav.html').toString()
  t.equal(nav.toHTML(), html)
  t.end()
})

test('base footer html', function (t) {
  var footer = views.footer({ children: [h('p', 'ok')] })
  var html = fs.readFileSync(__dirname + '/fixtures/footer.html').toString()
  t.equal(footer.toHTML(), html)
  t.end()
})

test('layout with header and footer', function (t) {
  var header = views.header({ children: [views.mainNav()] })
  var footer = views.footer({ children: [views.socialNav()] })
  var layout = views.layout({ body: [header, footer] })
  var html = fs.readFileSync(__dirname + '/fixtures/layout-header-footer.html').toString()
  t.equal(layout.toHTML(), html)
  t.end()
})

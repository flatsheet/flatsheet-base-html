# flatsheet-base-html

Using [virtual-hyperscript](https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript), this module provides the base html used in flatsheet projects.

## Warning

Hey, this is really just for flatsheet stuff. You most likely won't benefit from it at all. But if you appreciate the approach, feel free to fork or copypasta this code around.

## How we use this

This module is used along with the [flatsheet-base-css](http://github.com/flatsheet/flatsheet-base-css) module to create the most basic of page layout and default styles.

## Install

```
npm i --save flatsheet-base-html
```

## Usage

```js
var views = require('flatsheet-base-html')
var header = views.header({ children: [views.mainNav()] })
var footer = views.footer({ children: [views.socialNav()] })
var layout = views.layout({ body: [header, footer] })
layout.toHTML()
```

See the [tests](tests/index.js) for more examples.

## License

[MIT](LICENSE.md)

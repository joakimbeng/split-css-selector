# split-css-selector

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Split a comma separated CSS selector list into an array of selectors

## Installation

Install `split-css-selector` using [npm](https://www.npmjs.com/):

```bash
npm install --save split-css-selector
```

## Usage

### Module usage

```javascript
var splitCssSelector = require('split-css-selector');

splitCssSelector('.class, .class2');
// ['.class', '.class2']
```

See [test/test.js](test/test.js) for more examples.

## API

### `splitSelectors(selectors)`

| Name | Type | Description |
|------|------|-------------|
| selectors | `String` | The list of selectors to split |

Returns: `Array`

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/split-css-selector
[npm-image]: https://badge.fury.io/js/split-css-selector.svg
[travis-url]: https://travis-ci.org/joakimbeng/split-css-selector
[travis-image]: https://travis-ci.org/joakimbeng/split-css-selector.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat

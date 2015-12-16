
# equal-obj

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Shallow object equality check

## Installation

    $ npm install @f/equal-obj

## Usage

```js
var equal = require('@f/equal-obj')

equal({a: 1}, {a: 1}) // => true
equal({a: 1}, {a: 2}) // => false

```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/equal-obj.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/equal-obj
[git-image]: https://img.shields.io/github/tag/micro-js/equal-obj.svg
[git-url]: https://github.com/micro-js/equal-obj
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/equal-obj.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/equal-obj

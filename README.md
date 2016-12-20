# iab-vast-error

[![npm](https://img.shields.io/npm/v/iab-vast-loader.svg)](https://www.npmjs.com/package/iab-vast-loader) [![Dependencies](https://img.shields.io/david/zentrick/iab-vast-loader.svg)](https://david-dm.org/zentrick/iab-vast-loader) [![Build Status](https://img.shields.io/circleci/project/github/zentrick/iab-vast-loader/master.svg)](https://circleci.com/gh/zentrick/iab-vast-loader) [![Coverage Status](https://img.shields.io/coveralls/zentrick/iab-vast-loader/master.svg)](https://coveralls.io/r/zentrick/iab-vast-loader) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Error class that describes VAST errors

## Usage

```js
import VASTError from 'iab-vast-error'

try {
  throw new VASTError(100)
} catch (e) {
  if (e instanceof VASTError) {
    // e.code -> 100
    // e.message -> 100 (XML parsing error.)
  }
}
```

## Maintainer

[Pieter Delbeke](https://github.com/delbeke)

## License

MIT

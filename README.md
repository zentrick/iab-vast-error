# iab-vast-error

[![npm](https://img.shields.io/npm/v/iab-vast-error.svg)](https://www.npmjs.com/package/iab-vast-error) [![Dependencies](https://img.shields.io/david/zentrick/iab-vast-error.svg)](https://david-dm.org/zentrick/iab-vast-error) [![Build Status](https://img.shields.io/circleci/project/github/zentrick/iab-vast-error/master.svg)](https://circleci.com/gh/zentrick/iab-vast-error) [![Coverage Status](https://img.shields.io/coveralls/zentrick/iab-vast-error/master.svg)](https://coveralls.io/r/zentrick/iab-vast-error) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Error class that describes VAST errors.

## Usage

```js
import VASTError from 'iab-vast-error'

try {
  throw new VASTError(100)
} catch (e) {
  if (e instanceof VASTError) {
    // e.code -> 100
    // e.message -> VAST error 100: XML parsing error.
  }
}
```

## Maintainer

[Tim De Pauw](https://github.com/timdp)

## License

MIT

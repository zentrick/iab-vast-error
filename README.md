# iab-vast-error

[![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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

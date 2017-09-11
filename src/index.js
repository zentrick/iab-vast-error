import ERRORS from './errors'
import ExtendableError from 'es6-error'

export { ERRORS }

export default class VASTError extends ExtendableError {
  constructor (code = 900) {
    super(`VAST error ${code}` +
      ((code in ERRORS) ? ': ' + ERRORS[code] : ''))
    this.code = code
    this.$type = 'VASTError'
  }
}

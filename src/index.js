import errorCodes from './error-codes.js'
import ExtendableError from 'es6-error'

const errorCode = Symbol

export default class VASTError extends ExtendableError {
  constructor (code = 900) {
    const text = errorCodes[code]
    const message = `${code}` + (text != null ? ` (${text})` : '')
    super(message)
    this[errorCode] = code
  }

  get code () {
    return this[errorCode]
  }
}

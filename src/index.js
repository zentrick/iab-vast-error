import codeToMessage from './code-to-message'
import ExtendableError from 'es6-error'

export default class VASTError extends ExtendableError {
  constructor (code = 900) {
    super(`VAST error ${code}` +
      ((code in codeToMessage) ? ': ' + codeToMessage[code] : ''))
    this.code = code
    this.$type = 'VASTError'
  }
}

VASTError.CODES = codeToMessage

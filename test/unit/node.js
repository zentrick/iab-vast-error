import VASTError from '../../src/index'

describe('VASTError', () => {
  it('throws error', () => {
    expect(() => {
      throw new VASTError()
    }).to.throw(Error)
  })

  it('copies error code', () => {
    const err = new VASTError(100)
    expect(err.code).to.equal(100)
  })

  it('supports custom error code', () => {
    const err = new VASTError(999)
    expect(err.code).to.equal(999)
  })

  it('reports correct message', () => {
    const err = new VASTError(100)
    expect(err.message).to.equal('VAST error 100: XML parsing error.')
  })
})

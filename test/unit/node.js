import VASTError from '../../src/index'

describe('VastError', () => {
  it('throws error', () => {
    expect(() => {
      throw new VASTError()
    }).to.throw(Error)
  })

  it('throws VastError', () => {
    expect(() => {
      throw new VASTError()
    }).to.throw(VASTError)
  })

  it('respects error code', () => {
    const err = new VASTError(100)
    expect(err.code).to.equal(100)
  })

  it('supports custom error code', () => {
    const err = new VASTError(999)
    expect(err.code).to.equal(999)
  })

  it('reports correct message', () => {
    const err = new VASTError(100)
    expect(err.message).to.equal('100 (XML parsing error.)')
  })
})

import VASTError from '../../src/index'

describe('VastError', () => {
  it('throws error', async () => {
    expect(() => {
      throw new VASTError()
    }).to.throw(Error)
  })

  it('throws VastError', async () => {
    expect(() => {
      throw new VASTError()
    }).to.throw(VASTError)
  })

  it('respects error code', async () => {
    const err = new VASTError(100)
    expect(err.code).to.equal(100)
  })

  it('supports custom error code', async () => {
    const err = new VASTError(999)
    expect(err.code).to.equal(999)
  })

  it('reports correct message', async () => {
    const err = new VASTError(100)
    expect(err.message).to.equal('100 (XML parsing error.)')
  })
})

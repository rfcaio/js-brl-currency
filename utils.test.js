const { removeLeadingZeros } = require('./utils')

describe('removeLeadingZeros', () => {
  test('removes leading zeros from a numeric string', () => {
    expect(removeLeadingZeros('0012')).toBe('12')
  })
})

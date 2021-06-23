const toBrl = require('.')

describe('toBrl', () => {
  test('returns `0,00` when an empty string is passed', () => {
    expect(toBrl('')).toEqual('0,00')
  })
})

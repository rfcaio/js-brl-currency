const toBrl = require('.')

describe('toBrl', () => {
  test('returns `0,00` when an empty string is passed', () => {
    expect(toBrl('')).toEqual('0,00')
  })

  test('autocompletes when a string with one character is passed', () => {
    expect(toBrl('1')).toEqual('0,01')
  })

  test('autocompletes when a string with two characters is passed', () => {
    expect(toBrl('12')).toEqual('0,12')
  })
})

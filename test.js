const toBrl = require('.')

describe('toBrl', () => {
  test('returns `0,00` when an empty string is passed', () => {
    expect(toBrl('')).toEqual('0,00')
  })

  test('autocompletes when an string with one character is passed', () => {
    expect(toBrl('4')).toEqual('0,04')
  })

  test('autocompletes when an string with two character is passed', () => {
    expect(toBrl('47')).toEqual('0,47')
  })
})

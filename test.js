const toBrl = require('.')

describe('toBrl', () => {
  test('returns `0,00` when an empty string is passed', () => {
    expect(toBrl('')).toEqual('0,00')
  })

  test('autocompletes when the first two characters are added', () => {
    expect(toBrl('0,001')).toEqual('0,01')
    expect(toBrl('0,012')).toEqual('0,12')
  })

  test('masks strings with more than two characters', () => {
    expect(toBrl('0,123')).toEqual('1,23')
    expect(toBrl('1,234')).toEqual('12,34')
    expect(toBrl('12,345')).toEqual('123,45')
  })

  test('adds thousands separator when a string with more than five characters is passed', () => {
    expect(toBrl('123,456')).toEqual('1.234,56')
    expect(toBrl('1.234,567')).toEqual('12.345,67')
    expect(toBrl('12.345,678')).toEqual('123.456,78')
    expect(toBrl('123.456,789')).toEqual('1.234.567,89')
  })
})

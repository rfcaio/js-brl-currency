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

  test('masks strings with more than two characters', () => {
    expect(toBrl('12345')).toEqual('123,45')
  })

  test('adds thousands separator when a string with more than five characters is passed', () => {
    expect(toBrl('123456')).toEqual('1.234,56')
    expect(toBrl('1234567')).toEqual('12.345,67')
    expect(toBrl('12345678')).toEqual('123.456,78')
    expect(toBrl('123456789')).toEqual('1.234.567,89')
  })

  test('removes non numeric characters', () => {
    expect(toBrl('a')).toEqual('0,00')
    expect(toBrl('1a')).toEqual('0,01')
  })

  test('removes leading zeros', () => {
    expect(toBrl('0,001')).toEqual('0,01')
    expect(toBrl('0,012')).toEqual('0,12')
  })
})

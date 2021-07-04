const { removeLeadingZeros, removeNonNumericCharacters } = require('./utils')

describe('removeLeadingZeros', () => {
  test('removes leading zeros from a numeric string', () => {
    expect(removeLeadingZeros('0012')).toBe('12')
  })
})

describe('removeNonNumericCharacters', () => {
  test('removes non numeric characters from a string', () => {
    expect(removeNonNumericCharacters('0,12a')).toBe('012')
  })
})

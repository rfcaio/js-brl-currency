const removeLeadingZeros = (value) => value.replace(/^0+/, '')

const removeNonNumericCharacters = (value) => value.replace(/[^0-9]/g, '')

module.exports = { removeLeadingZeros, removeNonNumericCharacters }

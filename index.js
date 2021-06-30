const removeLeadingZeros = (value) => {
  return value.replace(/^0+/, '')
}

const removeNonNumericCharacters = (value) => {
  return value.replace(/[^0-9]/g, '')
}

const toBrl = (value) => {
  value = removeNonNumericCharacters(value)
  value = removeLeadingZeros(value)

  if (value.length === 0) {
    return '0,00'
  }

  if (value.length === 1) {
    return `0,0${value}`
  }

  if (value.length === 2) {
    return `0,${value}`
  }

  const integerPartWithThousandSeparators = value
    .slice(0, -2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  const fractionalPart = value.slice(-2)
  return `${integerPartWithThousandSeparators},${fractionalPart}`
}

module.exports = toBrl

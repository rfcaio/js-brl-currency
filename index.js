const toBrl = (value) => {
  if (value.length === 0) {
    return '0,00'
  }

  if (value.length === 1) {
    return `0,0${value}`
  }
}

module.exports = toBrl

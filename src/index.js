import uniqueRandomArray from 'unique-random-array'
const whiteChicks = require('./white-chicks.json')

const mainExport = {
  all: whiteChicks,
  random: uniqueRandomArray(whiteChicks),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility

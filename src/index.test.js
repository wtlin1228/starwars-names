import {expect} from 'chai'
import whiteChicks from '.'

describe('white-chicks', () => {
  it('should have a list of all available names', () => {
    expect(whiteChicks.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(whiteChicks.random()).to.satisfy(isIncludedIn(whiteChicks.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}

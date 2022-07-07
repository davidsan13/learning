const modules = require('./capitalize');
const capitalize = modules.capitalize;
const reverseString = modules.reverseString;
const calculator = modules.calculator
const ceaser = modules.caesarCipher
const analyzeArray = modules.analyzeArray
// const reverseString = require



describe('test practice', () => {
  test.skip('firstLetter', () => {
    expect(capitalize('fisher')).toBe('Fisher');
  })
  
  test.skip('Capitalize every words', () => {
    expect(capitalize('shooter shoot')).toBe('Shooter Shoot');
  })

  test.skip('reverseString', () => {
    expect(reverseString('Hello World!')).toBe('olleH !dlroW')
  })

  test.skip('addition', () => {
    const cal = calculator(1,5)
    expect(cal.add()).toBe(6)
    expect(cal.subtract()).toBe(-4)
    expect(cal.multi()).toBe(5);
    expect(cal.divide()).toBe(.2)
  })

  test.skip('ceaser', () => {
    expect(ceaser('ab')).toBe('bc')
  })

  test('array', () => {
    const array = [1,8,3,4,2,6];
    expect(analyzeArray(array)).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    })
  })
})
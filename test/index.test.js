const NextPermutation = require('../index.js')
describe('测试列表', () => {
  test('next_permutation of "123" is 132', () => {
    expect(NextPermutation('123')).toBe('132')
  })
  
  test('next_permutation of "123" by 2 steps is 213', () => {
    expect(NextPermutation('123', 2)).toBe('213')
  })

  test('next_permutation of "123" by 10 steps is 321', () => {
    expect(NextPermutation('123', 10)).toBe('321')
  })
  
  test('next_permutation of invalid steps', () => {
    expect(() => {
      NextPermutation('123', 'a')
    }).toThrow('steps must be a valid number')
  })

  test('next_permutation of invalid steps', () => {
    expect(() => {
      NextPermutation('123', 0)
    }).toThrow('steps must be a valid number')
  })

  test('next_permutation of invalid steps', () => {
    expect(() => {
      NextPermutation('')
    }).toThrow('str must be a valid string')
  })
})

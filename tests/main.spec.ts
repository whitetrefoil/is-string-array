jest.resetModules()

import isStringArray from '../src/main'

describe('allowEmpty === undefined', () => {
  test('string[]', () => {
    const target = ['1', '2']
    expect(isStringArray(target)).toBe(true)
  })

  test('number[]', () => {
    const target = [1, 2]
    expect(isStringArray(target)).toBe(false)
  })

  test('new Array("1", "2")', () => {
    const target = new Array('1', '2')
    expect(isStringArray(target)).toBe(true)
  })

  test('string', () => {
    const target = '123'
    expect(isStringArray(target)).toBe(false)
  })

  test('[]', () => {
    const target: any[] = []
    expect(isStringArray(target)).toBe(true)
  })
})


describe('allowEmpty === true', () => {
  test('string[]', () => {
    const target = ['1', '2']
    expect(isStringArray(target, true)).toBe(true)
  })

  test('number[]', () => {
    const target = [1, 2]
    expect(isStringArray(target, true)).toBe(false)
  })

  test('new Array("1", "2")', () => {
    const target = new Array('1', '2')
    expect(isStringArray(target, true)).toBe(true)
  })

  test('string', () => {
    const target = '123'
    expect(isStringArray(target, true)).toBe(false)
  })

  test('[]', () => {
    const target: any[] = []
    expect(isStringArray(target, true)).toBe(true)
  })
})


describe('allowEmpty === false', () => {
  test('string[]', () => {
    const target = ['1', '2']
    expect(isStringArray(target, false)).toBe(true)
  })

  test('number[]', () => {
    const target = [1, 2]
    expect(isStringArray(target, false)).toBe(false)
  })

  test('new Array("1", "2")', () => {
    const target = new Array('1', '2')
    expect(isStringArray(target, false)).toBe(true)
  })

  test('string', () => {
    const target = '123'
    expect(isStringArray(target, false)).toBe(false)
  })

  test('[]', () => {
    const target: any[] = []
    expect(isStringArray(target, false)).toBe(false)
  })
})

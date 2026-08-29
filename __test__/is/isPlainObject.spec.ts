import { isPlainObject } from '@chronus-dev/utils'
import { describe, expect, it } from 'vitest'

describe('isPlainObject', () => {
  it('returns true for a plain object value', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject({ foo: 'bar' })).toBe(true)
    expect(isPlainObject(Object.create(null))).toBe(true)
  })

  it('returns false for a non-plain object value', () => {
    expect(isPlainObject('foo')).toBe(false)
    expect(isPlainObject(123)).toBe(false)
    expect(isPlainObject(123n)).toBe(false)
    expect(isPlainObject(true)).toBe(false)
    expect(isPlainObject(Symbol('foo'))).toBe(false)
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject(() => {})).toBe(false)
    expect(isPlainObject(new Date())).toBe(false)
    expect(isPlainObject(null)).toBe(false)
    expect(isPlainObject(undefined)).toBe(false)
  })
})

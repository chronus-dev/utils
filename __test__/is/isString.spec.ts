import { isString } from '@chronus-dev/utils'
import { describe, expect, it } from 'vitest'

describe('isString', () => {
  it('returns true for a string value', () => {
    expect(isString('')).toBe(true)
    expect(isString('foo')).toBe(true)
  })

  it('returns false for a non-string value', () => {
    expect(isString(123)).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(123n)).toBe(false)
    expect(isString(Symbol('foo'))).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString(() => {})).toBe(false)
    expect(isString(new Date())).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
  })
})

import { isNumber } from '@chronus-dev/utils'
import { describe, expect, it } from 'vitest'

describe('isNumber', () => {
  it('returns true for a number value', () => {
    expect(isNumber(123)).toBe(true)
    expect(isNumber(NaN)).toBe(true)
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(-Infinity)).toBe(true)
  })

  it('returns false for a non-number value', () => {
    expect(isNumber('foo')).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(123n)).toBe(false)
    expect(isNumber(Symbol('foo'))).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber(() => {})).toBe(false)
    expect(isNumber(new Date())).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
  })
})

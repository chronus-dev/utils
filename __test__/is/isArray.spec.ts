import { isArray } from '@chronus-dev/utils'
import { describe, expect, it } from 'vitest'

describe('isArray', () => {
  it('returns true for an array value', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
  })

  it('returns false for a non-array value', () => {
    expect(isArray('foo')).toBe(false)
    expect(isArray(123)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(123n)).toBe(false)
    expect(isArray(Symbol('foo'))).toBe(false)
    expect(isArray({})).toBe(false)
    expect(isArray(() => {})).toBe(false)
    expect(isArray(new Date())).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
  })
})

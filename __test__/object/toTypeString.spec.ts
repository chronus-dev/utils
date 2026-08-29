import { toTypeString } from '@chronus-dev/utils'
import { describe, expect, it } from 'vitest'

describe('toTypeString', () => {
  it('returns the type tag for an object value', () => {
    expect(toTypeString({})).toBe('[object Object]')
    expect(toTypeString([])).toBe('[object Array]')
    expect(toTypeString(new Date())).toBe('[object Date]')
  })

  it('returns the type tag for a primitive value', () => {
    expect(toTypeString('foo')).toBe('[object String]')
    expect(toTypeString(123)).toBe('[object Number]')
    expect(toTypeString(true)).toBe('[object Boolean]')
    expect(toTypeString(123n)).toBe('[object BigInt]')
    expect(toTypeString(Symbol('foo'))).toBe('[object Symbol]')
  })

  it('returns the type tag for null and undefined', () => {
    expect(toTypeString(null)).toBe('[object Null]')
    expect(toTypeString(undefined)).toBe('[object Undefined]')
  })

  it('returns the type tag for a function value', () => {
    expect(toTypeString(() => {})).toBe('[object Function]')
  })
})

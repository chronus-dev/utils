import { describe, expect, it } from 'vitest'

import { isBoolean } from '../../src/is/isBoolean'

describe('isBoolean', () => {
    it('returns true for a boolean value', () => {
        expect(isBoolean(true)).toBe(true)
        expect(isBoolean(false)).toBe(true)
    })

    it('returns false for a non-boolean value', () => {
        expect(isBoolean('foo')).toBe(false)
        expect(isBoolean(123)).toBe(false)
        expect(isBoolean(123n)).toBe(false)
        expect(isBoolean(Symbol('foo'))).toBe(false)
        expect(isBoolean([])).toBe(false)
        expect(isBoolean({})).toBe(false)
        expect(isBoolean(() => {})).toBe(false)
        expect(isBoolean(new Date())).toBe(false)
        expect(isBoolean(null)).toBe(false)
        expect(isBoolean(undefined)).toBe(false)
    })
})

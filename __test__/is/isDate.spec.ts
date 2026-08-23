import { describe, expect, it } from 'vitest'

import { isDate } from '../../src/is/isDate'

describe('isDate', () => {
    it('returns true for a date value', () => {
        expect(isDate(new Date())).toBe(true)
        expect(isDate(new Date('2026-01-01'))).toBe(true)
    })

    it('returns false for a non-date value', () => {
        expect(isDate('2026-01-01')).toBe(false)
        expect(isDate(123)).toBe(false)
        expect(isDate(true)).toBe(false)
        expect(isDate(123n)).toBe(false)
        expect(isDate(Symbol('foo'))).toBe(false)
        expect(isDate([])).toBe(false)
        expect(isDate({})).toBe(false)
        expect(isDate(() => {})).toBe(false)
        expect(isDate(new Map())).toBe(false)
        expect(isDate(null)).toBe(false)
        expect(isDate(undefined)).toBe(false)
    })
})

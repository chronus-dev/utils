import { describe, expect, it } from 'vitest'

import { isBigInt } from '../../src/is/isBigInt'

describe('isBigInt', () => {
    it('returns true for a bigint value', () => {
        expect(isBigInt(123n)).toBe(true)
    })

    it('returns false for a non-bigint value', () => {
        expect(isBigInt('foo')).toBe(false)
        expect(isBigInt(123)).toBe(false)
        expect(isBigInt(true)).toBe(false)
        expect(isBigInt(Symbol('foo'))).toBe(false)
        expect(isBigInt([])).toBe(false)
        expect(isBigInt({})).toBe(false)
        expect(isBigInt(() => {})).toBe(false)
        expect(isBigInt(new Date())).toBe(false)
        expect(isBigInt(null)).toBe(false)
        expect(isBigInt(undefined)).toBe(false)
    })
})

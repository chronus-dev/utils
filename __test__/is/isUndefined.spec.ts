import { describe, expect, it } from 'vitest'

import { isUndefined } from '../../src/is/isUndefined'

describe('isUndefined', () => {
    it('returns true for an undefined value', () => {
        expect(isUndefined(undefined)).toBe(true)
    })

    it('returns false for a non-undefined value', () => {
        expect(isUndefined('foo')).toBe(false)
        expect(isUndefined(123)).toBe(false)
        expect(isUndefined(true)).toBe(false)
        expect(isUndefined(123n)).toBe(false)
        expect(isUndefined(Symbol('foo'))).toBe(false)
        expect(isUndefined([])).toBe(false)
        expect(isUndefined({})).toBe(false)
        expect(isUndefined(() => {})).toBe(false)
        expect(isUndefined(new Date())).toBe(false)
        expect(isUndefined(null)).toBe(false)
    })
})

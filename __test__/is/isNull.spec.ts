import { describe, expect, it } from 'vitest'

import { isNull } from '@chronus-dev/utils'

describe('isNull', () => {
    it('returns true for a null value', () => {
        expect(isNull(null)).toBe(true)
    })

    it('returns false for a non-null value', () => {
        expect(isNull(false)).toBe(false)
        expect(isNull(123)).toBe(false)
        expect(isNull('foo')).toBe(false)
        expect(isNull(123n)).toBe(false)
        expect(isNull(Symbol('foo'))).toBe(false)
        expect(isNull([])).toBe(false)
        expect(isNull({})).toBe(false)
        expect(isNull(() => {})).toBe(false)
        expect(isNull(new Date())).toBe(false)
        expect(isNull(undefined)).toBe(false)
    })
})

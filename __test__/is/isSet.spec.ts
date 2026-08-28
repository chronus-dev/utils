import { isSet } from '@chronus-dev/utils'
import { describe, expect, it } from 'vitest'

describe('isSet', () => {
    it('returns true for a set value', () => {
        expect(isSet(new Set())).toBe(true)
    })

    it('returns false for a non-set value', () => {
        expect(isSet('foo')).toBe(false)
        expect(isSet(123)).toBe(false)
        expect(isSet(true)).toBe(false)
        expect(isSet(123n)).toBe(false)
        expect(isSet(Symbol('foo'))).toBe(false)
        expect(isSet([])).toBe(false)
        expect(isSet({})).toBe(false)
        expect(isSet(() => {})).toBe(false)
        expect(isSet(new Date())).toBe(false)
        expect(isSet(null)).toBe(false)
        expect(isSet(undefined)).toBe(false)
    })
})

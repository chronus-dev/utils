import { describe, expect, it } from 'vitest'

import { isRegExp } from '../../src/is/isRegExp'

describe('isRegExp', () => {
    it('returns true for a regexp value', () => {
        expect(isRegExp(/foo/)).toBe(true)
    })

    it('returns false for a non-regexp value', () => {
        expect(isRegExp('foo')).toBe(false)
        expect(isRegExp(123)).toBe(false)
        expect(isRegExp(true)).toBe(false)
        expect(isRegExp(123n)).toBe(false)
        expect(isRegExp(Symbol('foo'))).toBe(false)
        expect(isRegExp([])).toBe(false)
        expect(isRegExp({})).toBe(false)
        expect(isRegExp(() => {})).toBe(false)
        expect(isRegExp(new Date())).toBe(false)
        expect(isRegExp(null)).toBe(false)
        expect(isRegExp(undefined)).toBe(false)
    })
})

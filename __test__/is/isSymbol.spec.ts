import { describe, expect, it } from 'vitest'

import { isSymbol } from '../../src/is/isSymbol'

describe('isSymbol', () => {
    it('returns true for a symbol value', () => {
        expect(isSymbol(Symbol())).toBe(true)
        expect(isSymbol(Symbol('foo'))).toBe(true)
    })

    it('returns false for a non-symbol value', () => {
        expect(isSymbol('foo')).toBe(false)
        expect(isSymbol(123)).toBe(false)
        expect(isSymbol(true)).toBe(false)
        expect(isSymbol(123n)).toBe(false)
        expect(isSymbol([])).toBe(false)
        expect(isSymbol({})).toBe(false)
        expect(isSymbol(() => {})).toBe(false)
        expect(isSymbol(new Date())).toBe(false)
        expect(isSymbol(null)).toBe(false)
        expect(isSymbol(undefined)).toBe(false)
    })
})

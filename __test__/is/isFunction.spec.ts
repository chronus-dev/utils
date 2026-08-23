import { describe, expect, it } from 'vitest'

import { isFunction } from '../../src/is/isFunction'

describe('isFunction', () => {
    it('returns true for a function value', () => {
        expect(isFunction(() => {})).toBe(true)
        expect(isFunction(function () {})).toBe(true)
        expect(isFunction(async () => {})).toBe(true)
        expect(isFunction(class {})).toBe(true)
    })

    it('returns false for a non-function value', () => {
        expect(isFunction('foo')).toBe(false)
        expect(isFunction(123)).toBe(false)
        expect(isFunction(123n)).toBe(false)
        expect(isFunction(true)).toBe(false)
        expect(isFunction(Symbol('foo'))).toBe(false)
        expect(isFunction([])).toBe(false)
        expect(isFunction({})).toBe(false)
        expect(isFunction(new Date())).toBe(false)
        expect(isFunction(null)).toBe(false)
        expect(isFunction(undefined)).toBe(false)
    })
})

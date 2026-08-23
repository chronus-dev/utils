import { describe, expect, it } from 'vitest'

import { isObject } from '../../src/is/isObject'

describe('isObject', () => {
    it('returns true for an object value', () => {
        expect(isObject({})).toBe(true)
        expect(isObject([])).toBe(true)
        expect(isObject(Object.create(null))).toBe(true)
        expect(isObject(new Date())).toBe(true)
    })

    it('returns false for a non-object value', () => {
        expect(isObject('foo')).toBe(false)
        expect(isObject(123)).toBe(false)
        expect(isObject(123n)).toBe(false)
        expect(isObject(true)).toBe(false)
        expect(isObject(Symbol('foo'))).toBe(false)
        expect(isObject(() => {})).toBe(false)
        expect(isObject(null)).toBe(false)
        expect(isObject(undefined)).toBe(false)
    })
})

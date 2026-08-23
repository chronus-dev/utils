import { describe, expect, it } from 'vitest'

import { isWeakMap } from '../../src/is/isWeakMap'

describe('isWeakMap', () => {
    it('returns true for a weak map value', () => {
        expect(isWeakMap(new WeakMap())).toBe(true)
    })

    it('returns false for a non-weak-map value', () => {
        expect(isWeakMap('foo')).toBe(false)
        expect(isWeakMap(123)).toBe(false)
        expect(isWeakMap(true)).toBe(false)
        expect(isWeakMap(123n)).toBe(false)
        expect(isWeakMap(Symbol('foo'))).toBe(false)
        expect(isWeakMap([])).toBe(false)
        expect(isWeakMap({})).toBe(false)
        expect(isWeakMap(() => {})).toBe(false)
        expect(isWeakMap(new Date())).toBe(false)
        expect(isWeakMap(null)).toBe(false)
        expect(isWeakMap(undefined)).toBe(false)
    })
})

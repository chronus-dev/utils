import { isMap } from '@chronus-dev/utils'
import { describe, expect, it } from 'vitest'

describe('isMap', () => {
    it('returns true for a map value', () => {
        expect(isMap(new Map())).toBe(true)
        expect(isMap(new Map([['foo', 123]]))).toBe(true)
    })

    it('returns false for a non-map value', () => {
        expect(isMap('foo')).toBe(false)
        expect(isMap(123)).toBe(false)
        expect(isMap(true)).toBe(false)
        expect(isMap(123n)).toBe(false)
        expect(isMap(Symbol('foo'))).toBe(false)
        expect(isMap([])).toBe(false)
        expect(isMap({})).toBe(false)
        expect(isMap(() => {})).toBe(false)
        expect(isMap(new Date())).toBe(false)
        expect(isMap(null)).toBe(false)
        expect(isMap(undefined)).toBe(false)
    })
})

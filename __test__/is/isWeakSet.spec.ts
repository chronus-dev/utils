import { isWeakSet } from '@chronus-dev/utils'
import { describe, expect, it } from 'vitest'

describe('isWeakSet', () => {
    it('returns true for a weak set value', () => {
        expect(isWeakSet(new WeakSet())).toBe(true)
    })

    it('returns false for a non-weak-set value', () => {
        expect(isWeakSet('foo')).toBe(false)
        expect(isWeakSet(123)).toBe(false)
        expect(isWeakSet(true)).toBe(false)
        expect(isWeakSet(123n)).toBe(false)
        expect(isWeakSet(Symbol('foo'))).toBe(false)
        expect(isWeakSet([])).toBe(false)
        expect(isWeakSet({})).toBe(false)
        expect(isWeakSet(() => {})).toBe(false)
        expect(isWeakSet(new Date())).toBe(false)
        expect(isWeakSet(null)).toBe(false)
        expect(isWeakSet(undefined)).toBe(false)
    })
})

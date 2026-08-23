import { describe, expect, it } from 'vitest'

import { isPromise } from '../../src/is/isPromise'

describe('isPromise', () => {
    it('returns true for a promise value', () => {
        expect(isPromise(Promise.resolve())).toBe(true)
    })

    it('returns true for a promise-like value', () => {
        expect(
            isPromise({
                then: () => {},
                catch: () => {}
            })
        ).toBe(true)
    })

    it('returns false for a non-promise value', () => {
        expect(isPromise('foo')).toBe(false)
        expect(isPromise(123)).toBe(false)
        expect(isPromise(true)).toBe(false)
        expect(isPromise(123n)).toBe(false)
        expect(isPromise(Symbol('foo'))).toBe(false)
        expect(isPromise([])).toBe(false)
        expect(isPromise({})).toBe(false)
        expect(isPromise(() => {})).toBe(false)
        expect(isPromise(new Date())).toBe(false)
        expect(isPromise(null)).toBe(false)
        expect(isPromise(undefined)).toBe(false)
    })

    it('returns false when then or catch is not a function', () => {
        expect(isPromise({ then: () => {} })).toBe(false)
        expect(isPromise({ catch: () => {} })).toBe(false)
        expect(isPromise({ then: 'foo', catch: () => {} })).toBe(false)
        expect(isPromise({ then: () => {}, catch: 'foo' })).toBe(false)
    })
})

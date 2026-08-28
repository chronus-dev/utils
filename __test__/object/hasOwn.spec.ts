import { describe, expect, it } from 'vitest'

import { hasOwn } from '@chronus-dev/utils'

describe('hasOwn', () => {
    it('returns true for an own property', () => {
        expect(hasOwn({ a: 1 }, 'a')).toBe(true)
        expect(hasOwn({ 1: 'foo' }, 1)).toBe(true)

        const key = Symbol('foo')
        const object = { [key]: 123 }

        expect(hasOwn(object, key)).toBe(true)
    })

    it('returns false for a missing property', () => {
        expect(hasOwn({ a: 1 }, 'b')).toBe(false)
    })

    it('returns false for an inherited property', () => {
        const object = Object.create({ a: 1 })

        expect(hasOwn(object, 'a')).toBe(false)
    })

    it('handles an object without a prototype', () => {
        const object = Object.create(null)
        object.a = 1

        expect(hasOwn(object, 'a')).toBe(true)
        expect(hasOwn(object, 'b')).toBe(false)
    })
})

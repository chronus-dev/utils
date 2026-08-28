import { isError } from '@chronus-dev/utils'
import { describe, expect, it } from 'vitest'

describe('isError', () => {
    it('returns true for an error value', () => {
        expect(isError(new Error())).toBe(true)
        expect(isError(new TypeError())).toBe(true)
    })

    it('returns false for a non-error value', () => {
        expect(isError('foo')).toBe(false)
        expect(isError(123)).toBe(false)
        expect(isError(true)).toBe(false)
        expect(isError(123n)).toBe(false)
        expect(isError(Symbol('foo'))).toBe(false)
        expect(isError([])).toBe(false)
        expect(isError({})).toBe(false)
        expect(isError(() => {})).toBe(false)
        expect(isError(new Date())).toBe(false)
        expect(isError(null)).toBe(false)
        expect(isError(undefined)).toBe(false)
    })
})

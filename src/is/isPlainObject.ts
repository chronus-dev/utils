import { toTypeString } from '../object'

/**
 * Checks if a value is a plain object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a plain object, else `false`
 *
 * @example
 * ```ts
 * isPlainObject({ foo: 'bar' }) // => true
 * isPlainObject(Object.create(null)) // => true
 * isPlainObject([1, 2, 3]) // => false
 * isPlainObject(new Date()) // => false
 * isPlainObject(null) // => false
 * ```
 */
export function isPlainObject(value: unknown): value is object {
    if (toTypeString(value) !== '[object Object]') {
        return false
    }

    const prototype = Object.getPrototypeOf(value)

    return prototype === Object.prototype || prototype === null
}

/**
 * Checks if a value is an object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is an object, else `false`
 *
 * @example
 * ```ts
 * isObject({ foo: 'bar' }) // => true
 * isObject([1, 2, 3]) // => true
 * isObject(new Date()) // => true
 * isObject(null) // => false
 * ```
 */
export function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null
}

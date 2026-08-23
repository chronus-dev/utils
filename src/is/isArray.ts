/**
 * Checks if a value is an `Array` object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is an array, else `false`
 *
 * @example
 * ```ts
 * isArray([1, 2, 3]) // => true
 * isArray('foo') // => false
 * ```
 */
export function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value)
}

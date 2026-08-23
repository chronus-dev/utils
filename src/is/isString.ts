/**
 * Checks if a value is a string.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a string, else `false`
 *
 * @example
 * ```ts
 * isString('foo') // => true
 * isString(123) // => false
 * ```
 */
export function isString(value: unknown): value is string {
    return typeof value === 'string'
}

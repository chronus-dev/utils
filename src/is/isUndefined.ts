/**
 * Checks if a value is undefined.
 *
 * @param value - The value to check
 * @returns `true` if `value` is undefined, else `false`
 *
 * @example
 * ```ts
 * isUndefined(undefined) // => true
 * isUndefined(null) // => false
 * ```
 */
export function isUndefined(value: unknown): value is undefined {
    return typeof value === 'undefined'
}

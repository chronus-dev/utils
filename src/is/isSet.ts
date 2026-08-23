import { toTypeString } from '../object'

/**
 * Checks if a value is a `Set` object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a set, else `false`
 *
 * @example
 * ```ts
 * isSet(new Set()) // => true
 * isSet([]) // => false
 * ```
 */
export function isSet(value: unknown): value is Set<any> {
    return toTypeString(value) === '[object Set]'
}

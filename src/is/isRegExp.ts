import { toTypeString } from '../object'

/**
 * Checks if a value is a `RegExp` object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a regexp, else `false`
 *
 * @example
 * ```ts
 * isRegExp(/foo/) // => true
 * isRegExp('foo') // => false
 * ```
 */
export function isRegExp(value: unknown): value is RegExp {
  return toTypeString(value) === '[object RegExp]'
}

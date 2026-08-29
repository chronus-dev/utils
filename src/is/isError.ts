import { toTypeString } from '../object'

/**
 * Checks if a value is an `Error` object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is an error, else `false`
 *
 * @example
 * ```ts
 * isError(new Error()) // => true
 * isError(new Date()) // => false
 * ```
 */
export function isError(value: unknown): value is Error {
  return toTypeString(value) === '[object Error]'
}

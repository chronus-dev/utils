import { toTypeString } from '../object'

/**
 * Checks if a value is a `Date` object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a date, else `false`
 *
 * @example
 * ```ts
 * isDate(new Date()) // => true
 * isDate('2026-01-01') // => false
 * ```
 */
export function isDate(value: unknown): value is Date {
  return toTypeString(value) === '[object Date]'
}

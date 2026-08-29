/**
 * Checks if a value is a boolean.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a boolean, else `false`
 *
 * @example
 * ```ts
 * isBoolean(true) // => true
 * isBoolean(123) // => false
 * ```
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

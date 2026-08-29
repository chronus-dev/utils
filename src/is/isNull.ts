/**
 * Checks if a value is null.
 *
 * @param value - The value to check
 * @returns `true` if `value` is null, else `false`
 *
 * @example
 * ```ts
 * isNull(null) // => true
 * isNull(undefined) // => false
 * ```
 */
export function isNull(value: unknown): value is null {
  return value === null
}

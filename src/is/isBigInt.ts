/**
 * Checks if a value is a bigint.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a bigint, else `false`
 *
 * @example
 * ```ts
 * isBigInt(123n) // => true
 * isBigInt(123) // => false
 * ```
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint'
}

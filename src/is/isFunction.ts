/**
 * Checks if a value is a function.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a function, else `false`
 *
 * @example
 * ```ts
 * isFunction(() => {}) // => true
 * isFunction(123) // => false
 * ```
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function'
}

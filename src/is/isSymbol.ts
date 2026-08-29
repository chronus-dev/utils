/**
 * Checks if a value is a symbol.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a symbol, else `false`
 *
 * @example
 * ```ts
 * isSymbol(Symbol()) // => true
 * isSymbol('foo') // => false
 * ```
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

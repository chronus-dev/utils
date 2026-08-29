import { toTypeString } from '../object'

/**
 * Checks if a value is a `WeakSet` object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a weak set, else `false`
 *
 * @example
 * ```ts
 * isWeakSet(new WeakSet()) // => true
 * isWeakSet(new Set()) // => false
 * ```
 */
export function isWeakSet(value: unknown): value is WeakSet<WeakKey> {
  return toTypeString(value) === '[object WeakSet]'
}

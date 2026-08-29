import { toTypeString } from '../object'

/**
 * Checks if a value is a `WeakMap` object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a weak map, else `false`
 *
 * @example
 * ```ts
 * isWeakMap(new WeakMap()) // => true
 * isWeakMap(new Map()) // => false
 * ```
 */
export function isWeakMap(value: unknown): value is WeakMap<WeakKey, any> {
  return toTypeString(value) === '[object WeakMap]'
}

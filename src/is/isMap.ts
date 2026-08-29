import { toTypeString } from '../object'

/**
 * Checks if a value is a `Map` object.
 *
 * @param value - The value to check
 * @returns `true` if `value` is a map, else `false`
 *
 * @example
 * ```ts
 * isMap(new Map()) // => true
 * isMap({}) // => false
 * ```
 */
export function isMap(value: unknown): value is Map<any, any> {
  return toTypeString(value) === '[object Map]'
}

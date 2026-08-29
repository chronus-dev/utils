const objectHasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Checks if an object has an own property with the specified key.
 *
 * @template T - The type of the object
 * @param object - The object to check
 * @param key - The property key to check
 * @returns `true` if `object` has an own property with `key`, else `false`
 *
 * @example
 * ```ts
 * hasOwn({ a: 1 }, 'a') // => true
 * hasOwn({ a: 1 }, 'b') // => false
 * ```
 */
export function hasOwn<T extends object>(
  object: T,
  key: PropertyKey,
): key is keyof T {
  return objectHasOwnProperty.call(object, key)
}

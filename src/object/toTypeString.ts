const objectToString = Object.prototype.toString

/**
 * Returns the object type tag of `value`.
 *
 * @param value - The value to inspect
 * @returns The object type tag of `value`
 *
 * @example
 * ```ts
 * toTypeString(new Date()) // => '[object Date]'
 * ```
 */
export function toTypeString(value: unknown): string {
    return objectToString.call(value)
}

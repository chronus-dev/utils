import { isFunction } from './isFunction'
import { isObject } from './isObject'

/**
 * Checks if a value is a promise.
 *
 * @template T - The type of the promised value
 * @param value - The value to check
 * @returns `true` if `value` is a promise, else `false`
 *
 * @example
 * ```ts
 * isPromise(Promise.resolve('foo')) // => true
 * isPromise('foo') // => false
 * ```
 */
export function isPromise<T = any>(value: unknown): value is Promise<T> {
    return (
        (isObject(value) || isFunction(value)) &&
        isFunction((value as any).then) &&
        isFunction((value as any).catch)
    )
}

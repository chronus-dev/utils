/**
 * Prettifies a type by expanding its properties into a simplified object type.
 *
 * @template T - The type to prettify
 */
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

# Prettify

Prettifies a type by expanding its properties into a simplified object type.

```ts
type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}
```

## Type Parameters

### T

- **Type:** `unknown`

The type to prettify.

## Example

```ts
import type { Prettify } from '@chronus-dev/utils'

type Name = Prettify<{ name: string } & { age: number }> // => { name: string; age: number }
```

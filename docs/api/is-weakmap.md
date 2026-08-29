# isWeakMap

Checks if a value is a `WeakMap` object.

```ts
function isWeakMap(value: unknown): value is WeakMap<WeakKey, any>
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a weak map, else `false`.

## Example

```ts
import { isWeakMap } from '@chronus-dev/utils'

const fruits: unknown = new WeakMap()
const apple = {}

if (isWeakMap(fruits)) {
  fruits.set(apple, 1) // => { {…} => 1 }
}
```

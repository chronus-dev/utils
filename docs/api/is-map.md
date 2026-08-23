# isMap

Checks if a value is a `Map` object.

```ts
function isMap(value: unknown): value is Map<any, any>
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a map, else `false`.

## Example

```ts
import { isMap } from '@chronus-dev/utils'

const fruits: unknown = new Map([
    ['apple', 1],
    ['banana', 2]
])

if (isMap(fruits)) {
    fruits.set('orange', 3) // => { 'apple' => 1, 'banana' => 2, 'orange' => 3 }
}
```

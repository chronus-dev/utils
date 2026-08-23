# isArray

Checks if a value is an `Array` object.

```ts
function isArray(value: unknown): value is unknown[]
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is an array, else `false`.

## Example

```ts
import { isArray } from '@chronus-dev/utils'

const fruits: unknown = ['apple', 'banana']

if (isArray(fruits)) {
    fruits.push('orange') // => ['apple', 'banana', 'orange']
}
```

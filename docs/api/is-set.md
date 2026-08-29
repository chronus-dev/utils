# isSet

Checks if a value is a `Set` object.

```ts
function isSet(value: unknown): value is Set<any>
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a set, else `false`.

## Example

```ts
import { isSet } from '@chronus-dev/utils'

const fruits: unknown = new Set(['apple', 'banana'])

if (isSet(fruits)) {
  fruits.add('orange') // => { 'apple', 'banana', 'orange' }
}
```

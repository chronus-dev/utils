# isWeakSet

Checks if a value is a `WeakSet` object.

```ts
function isWeakSet(value: unknown): value is WeakSet<WeakKey>
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a weak set, else `false`.

## Example

```ts
import { isWeakSet } from '@chronus-dev/utils'

const fruits: unknown = new WeakSet()
const apple = {}

if (isWeakSet(fruits)) {
  fruits.add(apple) // => { {…} }
}
```

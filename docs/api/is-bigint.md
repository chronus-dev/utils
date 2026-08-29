# isBigInt

Checks if a value is a bigint.

```ts
function isBigInt(value: unknown): value is bigint
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a bigint, else `false`.

## Example

```ts
import { isBigInt } from '@chronus-dev/utils'

const count: unknown = 100n

if (isBigInt(count)) {
  console.log(count + 200n) // => 300n
}
```

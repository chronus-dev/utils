# isNumber

Checks if a value is a number.

```ts
function isNumber(value: unknown): value is number
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a number, else `false`.

## Example

```ts
import { isNumber } from '@chronus-dev/utils'

const count: unknown = 100

if (isNumber(count)) {
    console.log(count + 200) // => 300
}
```

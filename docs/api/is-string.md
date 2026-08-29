# isString

Checks if a value is a string.

```ts
function isString(value: unknown): value is string
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a string, else `false`.

## Example

```ts
import { isString } from '@chronus-dev/utils'

const name: unknown = 'Alice'

if (isString(name)) {
  console.log(name.toUpperCase()) // => 'ALICE'
}
```

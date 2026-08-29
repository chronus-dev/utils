# isBoolean

Checks if a value is a boolean.

```ts
function isBoolean(value: unknown): value is boolean
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a boolean, else `false`.

## Example

```ts
import { isBoolean } from '@chronus-dev/utils'

let enabled: unknown = true

if (isBoolean(enabled)) {
  console.log(!enabled) // => false
}
```

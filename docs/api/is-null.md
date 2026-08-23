# isNull

Checks if a value is null.

```ts
function isNull(value: unknown): value is null
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is null, else `false`.

## Example

```ts
import { isNull } from '@chronus-dev/utils'

const name: unknown = null

if (isNull(name)) {
    console.log('Name is null') // => 'Name is null'
}
```

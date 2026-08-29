# isUndefined

Checks if a value is undefined.

```ts
function isUndefined(value: unknown): value is undefined
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is undefined, else `false`.

## Example

```ts
import { isUndefined } from '@chronus-dev/utils'

const name: unknown = undefined

if (isUndefined(name)) {
  console.log('Name is undefined') // => 'Name is undefined'
}
```

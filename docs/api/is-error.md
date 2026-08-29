# isError

Checks if a value is an `Error` object.

```ts
function isError(value: unknown): value is Error
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is an error, else `false`.

## Example

```ts
import { isError } from '@chronus-dev/utils'

const error: unknown = new Error('Something went wrong')

if (isError(error)) {
  console.log(error.message) // => 'Something went wrong'
}
```

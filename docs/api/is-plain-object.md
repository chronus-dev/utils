# isPlainObject

Checks if a value is a plain object.

```ts
function isPlainObject(value: unknown): value is object
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a plain object, else `false`.

## Example

```ts
import { isPlainObject } from '@chronus-dev/utils'

const date: unknown = new Date()

if (!isPlainObject(date)) {
    console.log('Not a plain object') // => 'Not a plain object'
}
```

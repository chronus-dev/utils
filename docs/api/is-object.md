# isObject

Checks if a value is an object.

```ts
function isObject(value: unknown): value is object
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is an object, else `false`.

## Example

```ts
import { isObject } from '@chronus-dev/utils'

const user: unknown = { name: 'Alice' }

if (isObject(user)) {
  Object.assign(user, { age: 18 }) // => { name: 'Alice', age: 18 }
}
```

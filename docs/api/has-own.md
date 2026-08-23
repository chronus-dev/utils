# hasOwn

Checks if an object has an own property with the specified key.

```ts
function hasOwn<T extends object>(object: T, key: PropertyKey): key is keyof T
```

## Type Parameters

### T

- **Type:** `object`

The type of the object.

## Parameters

### object

- **Type:** `T`

The object to check.

### key

- **Type:** `PropertyKey`

The property key to check.

## Returns

Returns `true` if `object` has an own property with `key`, else `false`.

## Example

```ts
import { hasOwn } from '@chronus-dev/utils'

const user: object = { name: 'Alice', age: 18 }
const key = 'name'

if (hasOwn(user, key)) {
    console.log(user[key]) // => 'Alice'
}
```

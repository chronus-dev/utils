# toTypeString

Returns the object type tag of `value`.

```ts
function toTypeString(value: unknown): string
```

## Parameters

### value

- **Type:** `unknown`

The value to inspect.

## Returns

Returns the object type tag of `value`.

## Example

```ts
import { isString } from '@chronus-dev/utils'

const date: unknown = new Date()

console.log(toTypeString(date)) // => '[object Date]'
```

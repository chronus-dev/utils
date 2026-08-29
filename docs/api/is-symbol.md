# isSymbol

Checks if a value is a symbol.

```ts
function isSymbol(value: unknown): value is symbol
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a symbol, else `false`.

## Example

```ts
import { isSymbol } from '@chronus-dev/utils'

const key: unknown = Symbol('id')

if (isSymbol(key)) {
  console.log(key.description) // => 'id'
}
```

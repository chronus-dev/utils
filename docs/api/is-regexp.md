# isRegExp

Checks if a value is a `RegExp` object.

```ts
function isRegExp(value: unknown): value is RegExp
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a regexp, else `false`.

## Example

```ts
import { isRegExp } from '@chronus-dev/utils'

const pattern: unknown = /hello/

if (isRegExp(pattern)) {
    console.log(pattern.test('hello')) // => true
}
```

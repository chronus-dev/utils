# isFunction

Checks if a value is a function.

```ts
function isFunction(value: unknown): value is Function
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a function, else `false`.

## Example

```ts
import { isFunction } from '@chronus-dev/utils'

const callback: unknown = () => {
    console.log('Hello')
}

if (isFunction(callback)) {
    callback() // => 'Hello'
}
```

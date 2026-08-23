# isPromise

Checks if a value is a promise.

```ts
function isPromise<T = any>(value: unknown): value is Promise<T>
```

## Type Parameters

### T

- **Type:** `any`

- **Default:** `any`

The type of the promised value.

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a promise, else `false`.

## Example

```ts
import { isPromise } from '@chronus-dev/utils'

const result: unknown = Promise.resolve(100)

if (isPromise<number>(result)) {
    result.then((price) => {
        console.log(price) // => 100
    })
}
```

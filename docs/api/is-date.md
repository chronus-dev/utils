# isDate

Checks if a value is a `Date` object.

```ts
function isDate(value: unknown): value is Date
```

## Parameters

### value

- **Type:** `unknown`

The value to check.

## Returns

Returns `true` if `value` is a date, else `false`.

## Example

```ts
import { isDate } from '@chronus-dev/utils'

const date: unknown = new Date('2026-01-01')

if (isDate(date)) {
  console.log(date.getFullYear()) // => 2026
}
```

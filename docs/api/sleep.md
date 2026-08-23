# sleep

Suspends execution for the specified duration.

```ts
function sleep(ms: number): Promise<void>
```

## Parameters

### ms

- **Type:** `number`

The duration to wait in milliseconds.

## Returns

Returns a promise that resolves after the specified duration.

## Example

```ts
import { sleep } from '@chronus-dev/utils'

await sleep(1000) // Waits for 1 second
```

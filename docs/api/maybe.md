# Maybe

Represents a value that can be null or undefined.

```ts
type Maybe<T> = T | null | undefined
```

## Type Parameters

### T

- **Type:** `unknown`

The value type.

## Example

```ts
import type { Maybe } from '@chronus-dev/utils'

type Name = Maybe<string> // => string | null | undefined
```

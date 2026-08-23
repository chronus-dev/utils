# Nullable

Represents a value that can also be null.

```ts
type Nullable<T> = T | null
```

## Type Parameters

### T

- **Type:** `unknown`

The value type.

## Example

```ts
import type { Nullable } from '@chronus-dev/utils'

type Name = Nullable<string> // => string | null
```

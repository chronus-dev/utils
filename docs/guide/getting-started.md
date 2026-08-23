# Getting Started

## Installation

::: code-group

```sh [npm]
$ npm install @chronus-dev/utils
```

```sh [pnpm]
$ pnpm add @chronus-dev/utils
```

```sh [yarn]
$ yarn add @chronus-dev/utils
```

```sh [bun]
$ bun add @chronus-dev/utils
```

:::

## Usage

```ts
import { isArray } from '@chronus-dev/utils'

const fruits: unknown = ['apple', 'banana']

if (isArray(fruits)) {
    fruits.push('orange')
}
```

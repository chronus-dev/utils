import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['__test__/**/*.spec.ts'],
  },
  resolve: {
    alias: [
      {
        find: /^@chronus-dev\/utils$/,
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
})

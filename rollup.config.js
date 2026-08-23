import pluginTerser from '@rollup/plugin-terser'
import pluginTypescript from '@rollup/plugin-typescript'
import pluginDts from 'rollup-plugin-dts'

import pkg from './package.json' with { type: 'json' }

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) 2026-present ${pkg.author}
 * @license ${pkg.license}
 */`

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.cjs',
                format: 'cjs',
                banner
            },
            {
                file: 'dist/index.mjs',
                format: 'esm',
                banner
            }
        ],
        plugins: [pluginTypescript(), pluginTerser()]
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'esm'
        },
        plugins: [pluginDts()]
    }
]

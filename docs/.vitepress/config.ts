import { defineConfig } from 'vitepress'
import {
    groupIconMdPlugin,
    groupIconVitePlugin
} from 'vitepress-plugin-group-icons'

const nav = [
    {
        text: 'Guide',
        link: '/guide/getting-started',
        activeMatch: '^/guide/'
    },
    {
        text: 'API',
        link: '/api/is-array',
        activeMatch: '^/api/'
    }
]

const guideSidebar = [
    {
        text: 'Introduction',
        items: [{ text: 'Getting Started', link: '/guide/getting-started' }]
    },
    { text: 'API Reference', link: '/api/is-array' }
]

const apiSidebar = [
    {
        text: 'API Reference',
        items: [
            {
                text: 'Is',
                collapsed: false,
                items: [
                    { text: 'isArray', link: '/api/is-array' },
                    { text: 'isBigInt', link: '/api/is-bigint' },
                    { text: 'isBoolean', link: '/api/is-boolean' },
                    { text: 'isDate', link: '/api/is-date' },
                    { text: 'isError', link: '/api/is-error' },
                    { text: 'isFunction', link: '/api/is-function' },
                    { text: 'isMap', link: '/api/is-map' },
                    { text: 'isNull', link: '/api/is-null' },
                    { text: 'isNumber', link: '/api/is-number' },
                    { text: 'isObject', link: '/api/is-object' },
                    {
                        text: 'isPlainObject',
                        link: '/api/is-plain-object'
                    },
                    { text: 'isPromise', link: '/api/is-promise' },
                    { text: 'isRegExp', link: '/api/is-regexp' },
                    { text: 'isSet', link: '/api/is-set' },
                    { text: 'isString', link: '/api/is-string' },
                    { text: 'isSymbol', link: '/api/is-symbol' },
                    { text: 'isUndefined', link: '/api/is-undefined' },
                    { text: 'isWeakMap', link: '/api/is-weakmap' },
                    { text: 'isWeakSet', link: '/api/is-weakset' }
                ]
            },
            {
                text: 'Object',
                collapsed: false,
                items: [
                    { text: 'hasOwn', link: '/api/has-own' },
                    {
                        text: 'toTypeString',
                        link: '/api/to-type-string'
                    }
                ]
            },
            {
                text: 'Promise',
                collapsed: false,
                items: [{ text: 'sleep', link: '/api/sleep' }]
            },
            {
                text: 'Types',
                collapsed: false,
                items: [
                    { text: 'Maybe', link: '/api/maybe' },
                    { text: 'Nullable', link: '/api/nullable' },
                    { text: 'Prettify', link: '/api/prettify' }
                ]
            }
        ]
    }
]

export default defineConfig({
    title: 'Utils',
    titleTemplate: `:title | Utilities for Chronus Projects`,
    description: 'Utilities for Chronus Projects',
    cleanUrls: true,
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    ],
    themeConfig: {
        nav,
        sidebar: {
            '/guide/': guideSidebar,
            '/api/': apiSidebar
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/chronus-dev/utils'
            },
            {
                icon: 'npm',
                link: 'https://www.npmjs.com/package/@chronus-dev/utils'
            }
        ],
        outline: {
            level: [2, 3]
        },
        search: {
            provider: 'local'
        },
        footer: {
            copyright: `© 2025-${new Date().getFullYear()} LanXiao`
        }
    },
    transformHead({ page, pageData }) {
        const url =
            'https://utils.chronus.dev/' +
            page.replace(/\.md$/, '').replace(/index$/, '')
        const title = pageData.frontmatter.title ?? 'Utils'
        // const image = `https://utils.chronus.dev/${pageData.frontmatter.cover ?? 'og.jpg'}`
        const description =
            pageData.frontmatter.description ?? 'Utilities for Chronus Projects'

        return [
            ['meta', { property: 'og:url', content: url }],
            ['meta', { property: 'og:title', content: title }],
            // ['meta', { property: 'og:image', content: image }],
            ['meta', { property: 'og:description', content: description }],
            ['meta', { property: 'og:site_name', content: 'Utils' }],
            ['meta', { property: 'og:type', content: 'website' }],
            ['link', { rel: 'canonical', href: url }]
        ]
    },
    markdown: {
        config(md) {
            md.use(groupIconMdPlugin)
        }
    },
    vite: {
        plugins: [groupIconVitePlugin()]
    }
})

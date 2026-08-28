import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-config-prettier'
import pluginImportX from 'eslint-plugin-import-x'
import pluginJsDoc from 'eslint-plugin-jsdoc'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig(
    {
        ignores: ['**/dist/**', '**/.vitepress/cache/**']
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    {
        name: 'base',
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                sourceType: 'module'
            },
            globals: {
                ...globals.es2023,
                ...globals.node
            }
        },
        plugins: {
            'import-x': pluginImportX,
            'jsdoc': pluginJsDoc
        },
        rules: {
            'eqeqeq': ['error', 'always'],
            'no-debugger': 'error',
            'no-console': 'error',

            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-function-type': 'off',

            'import-x/order': [
                'error',
                {
                    'groups': [
                        'builtin',
                        'external',
                        ['internal', 'parent', 'sibling', 'index'],
                        'type'
                    ],
                    'pathGroups': [
                        {
                            pattern: '@chronus-dev/utils',
                            group: 'external'
                        }
                    ],
                    'newlines-between': 'always',
                    'alphabetize': {
                        order: 'asc',
                        caseInsensitive: true
                    }
                }
            ],
            'import-x/newline-after-import': ['error', { count: 1 }],

            'jsdoc/check-access': 'error',
            'jsdoc/check-alignment': 'error',
            'jsdoc/check-indentation': 'error',
            'jsdoc/check-line-alignment': 'error',
            'jsdoc/check-param-names': 'error',
            'jsdoc/check-property-names': 'error',
            'jsdoc/check-syntax': 'error',
            'jsdoc/check-tag-names': 'error',
            'jsdoc/check-template-names': 'error',
            'jsdoc/check-types': 'off',
            'jsdoc/check-values': 'error',
            'jsdoc/convert-to-jsdoc-comments': 'error',
            'jsdoc/empty-tags': 'error',
            'jsdoc/escape-inline-tags': 'error',
            'jsdoc/text-escaping': 'off',
            'jsdoc/type-formatting': 'error',
            'jsdoc/implements-on-classes': 'error',
            'jsdoc/imports-as-dependencies': 'error',
            'jsdoc/informative-docs': 'off',
            'jsdoc/match-description': [
                'error',
                {
                    matchDescription: '^[\\s\\S]+\\.[\\s]*$',
                    tags: {
                        param: '.*[^.\\s]$',
                        returns: '.*[^.\\s]$',
                        throws: '.*[^.\\s]$',
                        yields: '.*[^.\\s]$',
                        see: '.*[^.\\s]$',
                        example: '.*[^.\\s]$'
                    }
                }
            ],
            'jsdoc/match-name': 'off',
            'jsdoc/require-description': 'error',
            'jsdoc/require-description-complete-sentence': 'off',
            'jsdoc/require-example': 'off',
            'jsdoc/require-file-overview': 'off',
            'jsdoc/require-hyphen-before-param-description': 'error',
            'jsdoc/require-jsdoc': 'error',
            'jsdoc/require-param': 'error',
            'jsdoc/require-param-description': 'error',
            'jsdoc/require-param-name': 'error',
            'jsdoc/require-param-type': 'off',
            'jsdoc/require-property': 'error',
            'jsdoc/require-property-description': 'error',
            'jsdoc/require-property-name': 'error',
            'jsdoc/require-property-type': 'off',
            'jsdoc/require-returns': 'error',
            'jsdoc/require-returns-check': 'error',
            'jsdoc/require-returns-description': 'error',
            'jsdoc/require-returns-type': 'off',
            'jsdoc/require-throws': 'error',
            'jsdoc/require-throws-description': 'error',
            'jsdoc/require-throws-type': 'off',
            'jsdoc/require-rejects': 'error',
            'jsdoc/require-next-description': 'warn',
            'jsdoc/require-next-type': 'off',
            'jsdoc/require-yields': 'error',
            'jsdoc/require-yields-check': 'error',
            'jsdoc/require-yields-description': 'warn',
            'jsdoc/require-yields-type': 'off',
            'jsdoc/require-template': 'off',
            'jsdoc/require-template-description': 'off',
            'jsdoc/sort-tags': [
                'error',
                {
                    linesBetween: 1,
                    reportTagGroupSpacing: true,
                    reportIntraTagGroupSpacing: true,
                    tagSequence: [
                        { tags: ['internal'] },
                        {
                            tags: ['template', 'param', 'returns']
                        },
                        { tags: ['throws', 'exception', 'rejects'] },
                        { tags: ['yields', 'yield'] },
                        { tags: ['example'] },
                        { tags: ['see'] }
                    ]
                }
            ],
            'jsdoc/tag-lines': [
                'error',
                'any',
                {
                    startLines: 1,
                    endLines: 0
                }
            ],
            'jsdoc/lines-before-block': 'error',
            'jsdoc/multiline-blocks': [
                'error',
                {
                    noSingleLineBlocks: true
                }
            ],
            'jsdoc/no-bad-blocks': 'error',
            'jsdoc/no-blank-block-descriptions': 'error',
            'jsdoc/no-blank-blocks': 'error',
            'jsdoc/no-defaults': 'error',
            'jsdoc/no-missing-syntax': 'off',
            'jsdoc/no-multi-asterisks': 'error',
            'jsdoc/no-restricted-syntax': 'off',
            'jsdoc/no-types': 'error',
            'jsdoc/no-undefined-types': 'off',
            'jsdoc/require-asterisk-prefix': 'error',
            'jsdoc/reject-any-type': 'off',
            'jsdoc/reject-function-type': 'off',
            'jsdoc/ts-method-signature-style': 'off',
            'jsdoc/ts-prefer-function-type': 'off',
            'jsdoc/ts-no-unnecessary-template-expression': 'off',
            'jsdoc/ts-no-empty-object-type': 'off',
            'jsdoc/require-tags': 'off',
            'jsdoc/valid-types': 'off'
        }
    },
    {
        name: 'test',
        files: ['__test__/**/*'],
        rules: {
            '@typescript-eslint/no-empty-function': 'off'
        }
    },
    prettier
)

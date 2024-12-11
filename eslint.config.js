import pluginJs from '@eslint/js'
import unocss from '@unocss/eslint-config/flat'
import eslintPluginAstro from 'eslint-plugin-astro'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  unocss,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'max-len': ['error', { code: 120, ignoreStrings: true, ignorePattern: '^\\s+(class|d)="[\\s\\S]+"$' }],
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
]

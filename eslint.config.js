import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default tseslint.config({
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist', 'node_modules'],
  extends: [
    eslintConfigPrettier,
    eslint.configs.recommended,
    ...tseslint.configs.stylisticTypeChecked,
    ...tseslint.configs.recommendedTypeChecked,
  ],
  plugins: {
    js: eslint,
    'react-x': reactX,
    'react-dom': reactDom,
    'react-hooks': reactHooks,
  },
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    ...reactX.configs['recommended-typescript'].rules,
    ...reactHooks.configs.recommended.rules,
    ...reactDom.configs.recommended.rules,
  },
})

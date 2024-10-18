import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    unocss: true,
    ignores: [
      '**/docs/content/**',
      '**/*.sh',
    ],
    rules: {
      'node/prefer-global/process': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'unocss/order': 'warn',
      'no-alert': 'warn',
      'unocss/order-attributify': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    files: ['docs/**', '**/playground/**'],
    rules: {
      'ts/explicit-function-return-type': ['off'],
    },
  },
)

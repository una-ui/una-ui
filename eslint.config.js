import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    unocss: true,
    typescript: true,
    vue: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'dprint',
    },
    ignores: [
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
    rules: {
      'ts/explicit-function-return-type': ['off'],
    },
  },
)

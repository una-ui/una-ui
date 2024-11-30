import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    unocss: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'dprint',
    },
    ignores: [
      './packages/preset/src/_style/theme.css',
      '**/*.sh',
    ],
    rules: {
      'node/prefer-global/process': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'unocss/order': 'warn',
      'unocss/order-attributify': 'warn',
    },
  },
  {
    files: ['docs/**', '**/playground/**'],
    rules: {
      'ts/explicit-function-return-type': ['off'],
    },
  },
)

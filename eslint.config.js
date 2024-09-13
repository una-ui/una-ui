import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    ignores: [
      '**/docs/content/**',
      '**/*.sh',
    ],
    rules: {
      'node/prefer-global/process': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'unocss/order': 'warn',
      'unocss/order-attributify': 'warn',
    },
  },
)

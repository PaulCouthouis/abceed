import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: {
    prettier: await import('eslint-plugin-prettier'),
  },
})

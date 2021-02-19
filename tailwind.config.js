module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        nav: 'repeat(3,minmax(150px,1fr))',
      },
    },
  },
  variants: {},
  plugins: [],
}

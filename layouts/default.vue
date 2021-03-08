<template>
  <div>
    <Navigation />
    <Header />
    <div class="nuxt_wrapper">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    Footer: AppFooter,
    Header,
    Navigation,
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.nuxt_wrapper {
  min-height: 80vh;
}
</style>

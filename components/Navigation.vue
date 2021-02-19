<template>
  <div class="sticky bg-gray-200 top-0 z-40 shadow-md h-32">
    <transition name="moving" tag="div">
      <div
        :class="{
          'move-index': page == 'index',
          'image absolute z-50': true,
          'move-about ': page == 'about',
          'move-project': page == 'project',
        }"
      >
        test
      </div>
    </transition>
    <div class="text-black nav-align-center">
      <div class="grid lg:grid-cols-nav sm:grid-cols-1 gap-4">
        <nuxt-link to="/">home</nuxt-link>
        <nuxt-link to="/about">about</nuxt-link>
        <nuxt-link to="/project">projects</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['page']),
  },
}
</script>

<style lang="scss" scoped>
.nav-align-center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  transition: transform 1s;
}
.move-index {
  transform: translate3d(100px, 100px, 0) scale(1.25);
}
.move-project {
  transform: translate(200px, 200px) scale(2);
}
.move-about {
  transform: translateX(200px) scale(3);
}
</style>

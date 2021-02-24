<template>
  <div>
    <transition mode="out-in" name="dropdown">
      <div v-if="menuOpened" class="nav-dropdown rounded-md font-bold">
        <div v-for="key in Navlinks" :key="key.name">
          <nuxt-link :to="key.route" exact>{{ key.name }}</nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    menuOpened: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(['Navlinks']),
  },
}
</script>

<style lang="scss" scoped>
.nav-dropdown {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 200px;
  height: 200px;
  background: rgba($color: #000000, $alpha: 0.8);
  z-index: 100;
  display: flex;
  padding: 10px;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    flex: row wrap;
    justify-content: center;
    flex: 0 0 30%;
  }
}
a,
a:visited,
a:active {
  color: white;
  &.nuxt-link-active {
    color: limegreen;
  }
}

.dropdown-enter-active {
  transition: all 0.3s ease;
}
.dropdown-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.dropdown-enter,
.dropdown-leave-to {
  transform: scale(1.5);
  transform-origin: '100% 0%';
  opacity: 0;
}
</style>

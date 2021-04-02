<template>
  <header class="sticky bg-gray-200 top-0 h-40">
    <transition-group name="bk" class="nav-background">
      <div v-if="page == 'index'" key="index" class="h-40 backgroud-1"></div>
      <div
        v-else-if="page == 'about'"
        key="about"
        class="h-40 background-2"
      ></div>
      <div v-else key="default" class="h-40 background-3"></div>
    </transition-group>
    <div class="bg-opacity-20 h-32 z-40 relative">
      <div class="text-black shadow-sm nav-wrapper h-12">
        <ul class="nav-links">
          <li v-for="key in Navlinks" :key="key.name">
            <nuxt-link :to="key.route" exact>{{ key.name }}</nuxt-link>
          </li>
        </ul>

        <div @click="menuOpened = !menuOpened">
          <icon-base
            class="menu"
            icon-name="menu"
            icon-color="white"
            width="28"
            height="28"
          >
            <icon-dropdown />
          </icon-base>
        </div>
        <nav-dropdown :menu-opened="menuOpened" />
      </div>
    </div>
    <Logo />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/components/Logo.vue'
import IconBase from '@/components/IconBase.vue'
import IconDropdown from '@/components/IconDropdown.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import gsap from 'gsap'
export default {
  components: {
    NavDropdown,
    IconDropdown,
    IconBase,
    Logo,
  },
  data() {
    return {
      menuOpened: false,
    }
  },
  computed: {
    ...mapState(['page', 'Navlinks']),
  },
  watch: {
    menuOpened(newValue) {
      if (newValue) {
        this.dropdownOpen()
      } else {
        this.dropdownClose()
      }
    },
  },
  methods: {
    dropdownOpen() {
      const tl = gsap.timeline()
      tl.to('.dropdown-first', {
        duration: 0.02,
        translateY: 2,
        fill: 'lightgreen',
      })
      tl.to('.dropdown-first', { duration: 0.02, delay: 0.02, translateY: -2 })
      tl.to('.dropdown-middle', {
        duration: 0.02,
        delay: 0.04,
        translateY: 2,
        fill: 'lightgreen',
      })
      tl.to('.dropdown-middle', { duration: 0.02, delay: 0.06, translateY: -2 })
      tl.to('.dropdown-last', {
        duration: 0.02,
        delay: 0.08,
        translateY: 2,
        fill: 'lightgreen',
      })
      tl.to('.dropdown-last', { duration: 0.02, delay: 0.1, translateY: -2 })
    },
    dropdownClose() {
      const tl = gsap.timeline()
      tl.to('.dropdown-last', { duration: 0.02, translateY: 2, fill: 'white' })
      tl.to('.dropdown-last', { duration: 0.02, delay: 0.02, translateY: -2 })
      tl.to('.dropdown-middle', {
        duration: 0.02,
        delay: 0.04,
        translateY: 2,
        fill: 'white',
      })
      tl.to('.dropdown-middle', { duration: 0.02, delay: 0.06, translateY: -2 })
      tl.to('.dropdown-first', {
        duration: 0.02,
        delay: 0.08,
        translateY: 2,
        fill: 'white',
      })
      tl.to('.dropdown-first', { duration: 0.02, delay: 0.1, translateY: -2 })
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-background {
  position: absolute;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
  }
}
@mixin backgroundImage($url) {
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 14%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url($url) no-repeat center center scroll;
  background-size: cover;
  position: absolute;
  width: 100vw;
}
.bk-enter-active,
.bk-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.09, 0, 1.05);
}

.bk-enter,
.bk-leave-to {
  transform: scale(1.1) translateZ(0);
  opacity: 0;
}
.backgroud-1 {
  @include backgroundImage('/sound-1781569.svg');
}
.background-2 {
  @include backgroundImage('/striped-2069813.svg');
}
.background-3 {
  @include backgroundImage('/project.jpg');
}
.nav-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
ul {
  list-style: none;
  width: 100vw;
  li {
    display: inline-block;
    padding: 0px 2em;
    border-right: solid 1px white;
    a {
      color: white;
      font-weight: 400;
      &:active,
      &:visited {
        color: white;
        text-decoration: none;
      }
    }
    &:last-child {
      border-right: none;
    }
  }
}
.nuxt-link-active {
  font-weight: 600;
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
.menu {
  position: absolute;
  top: 10px;
  right: 50px;
}
@media (max-width: 760px) {
}
@media (max-width: 460px) {
  .nav-links {
    display: none;
  }
  .menu {
    right: 20px;
  }
}
</style>

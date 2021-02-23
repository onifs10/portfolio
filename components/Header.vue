<template>
  <div class="bg-transparent h-auto header-wrapper">
    <img
      :class="{
        'shadow-sm border-4 bg-gray-200 pp border-gray-500': true,
        'profile-photo rounded': page === 'index',
        'profile-photo-project rounded-full': page === 'projects',
        'profile-photo-about rounded-3xl': page === 'about',
      }"
      src="/starfish.svg"
      alt="profile-photo"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  computed: {
    ...mapState(['page']),
  },
  mounted() {
    this.headerAnimation()
  },
  methods: {
    headerAnimation() {
      // ScrollTrigger.create(
      // })

      gsap.to('.pp', {
        scrollTrigger: {
          trigger: '.pp',
          start: '10px 10px',
          toggleActions: 'restart  pause reverse none',
        },
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.hidden {
  display: none;
}
@mixin group($top, $left) {
  position: absolute;
  top: $top;
  left: $left;
  display: block;
  object-fit: cover;
  padding: 0.1rem;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: 0.4s all ease-out;
}
.profile-photo {
  width: 200px;
  height: 200px;
  @include group(70px, 150px);
  img {
    border-radius: 4px;
  }
}
.profile-photo-project {
  width: 50px;
  height: 50px;
  @include group(70px, 150px);
}
.profile-photo-about {
  width: 100px;
  height: 100px;
  @include group(50px, 150px);
}

@media (max-width: 760px) {
  .profile-photo {
    @include group(50px, 10px);
  }
  .profile-photo-about {
    @include group(100px, 10%);
  }
  .profile-photo-project {
    @include group(50px, 10%);
  }
}

@media (max-width: 460px) {
}
</style>

<template>
  <div class="footer h-12">
    <ul>
      <li v-for="handle in handles" :key="handle.name" class="test">
        <a :href="handle.link" target="blank">
          <icon-base
            :icon-name="handle.name"
            :view-box="handle.viewBox"
            height="24"
            width="24"
          >
            <component :is="handle.name + '-icon'" />
          </icon-base>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LinkedinIcon from '@/components/LinkedinIcon.vue'
import TwitterIcon from '@/components/TwitterIcon.vue'
import GitIcon from '@/components/GitIcon.vue'
import IconBase from '@/components/IconBase.vue'
export default {
  components: {
    LinkedinIcon,
    TwitterIcon,
    GitIcon,
    IconBase,
  },
  computed: {
    ...mapState(['handles']),
  },
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background: lightgray;
  div {
    flex: 0 0 auto;
    text-align: center;
  }
}
ul {
  list-style: none;
  li {
    display: inline-block;
    margin: 0 20px;
  }
}
</style>

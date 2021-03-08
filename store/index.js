export const state = () => ({
  test: 'sample',
  page: 'index',
  Navlinks: [
    {
      route: '/',
      name: 'Home',
    },
    {
      route: '/about',
      name: 'About',
    },
    {
      route: '/projects',
      name: 'Projects',
    },
  ],
  handles: [
    {
      name: 'twitter',
      link: 'https://www.linkedin.com/in/boluwatife-onifade-76765a183/',
      viewBox: '0 0 512 512',
    },
    { name: 'git', link: 'https://github.com/onifs10', viewBox: '0 0 35 35' },
    {
      name: 'linkedin',
      link: 'https://twitter.com/BasitOnifade',
      viewBox: '0 0 512 512',
    },
  ],
})

export const mutations = {
  updatePage(state, payload) {
    state.page = payload
  },
}

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
})

export const mutations = {
  updatePage(state, payload) {
    state.page = payload
  },
}

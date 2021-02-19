export const state = () => ({
  test: 'sample',
  page: 'index',
})

export const mutations = {
  updatePage(state, payload) {
    state.page = payload
    console.log(payload)
  },
}

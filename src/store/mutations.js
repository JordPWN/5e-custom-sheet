export const mutations = {
  updateStat (state, val, name) {
    console.log('state: ', state, '\nval: ', val, '\nname: ', name)
    state.stats[name] = val
  }
}

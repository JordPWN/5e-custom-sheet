import Vue from 'vue'
import Vuex from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

Vue.use(Vuex)

const state = {
  stats: {
    strength: 14,
    dexterity: 18,
    constitution: 18,
    intelligence: 18,
    wisdom: 18,
    charisma: 18
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

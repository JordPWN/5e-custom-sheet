import Vue from 'vue'
import Vuex from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

Vue.use(Vuex)

function statBonus (stat) {
  return Math.floor((stat - 10) / 2)
}

const defaultState = {
  stats: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10
  }
}

let stats = defaultState.stats

const statBonuses = {
  strength: statBonus(stats.strength),
  dexterity: statBonus(stats.dexterity),
  constitution: statBonus(stats.constitution),
  intelligence: statBonus(stats.intelligence),
  wisdom: statBonus(stats.wisdom),
  charisma: statBonus(stats.charisma)
}

const savingThrowProf = {
  strength: true,
  dexterity: false,
  constitution: false,
  intelligence: false,
  wisdom: false,
  charisma: false
}
const skillProfs = {
  'acrobatics': false,
  'animal handling': false,
  'arcana': true,
  'athletics': false,
  'deception': false,
  'history': false,
  'insight': false,
  'intimidation': false,
  'investigation': false,
  'medicine': false,
  'nature': false,
  'perception': false,
  'performance': false,
  'persuasion': false,
  'religion': false,
  'stealth': false,
  'sleight of hand': false,
  'survival': false
}

let savingThrows = {
  strength: savingThrowProf.strength ? statBonuses.strength + 2 : statBonuses.strength,
  dexterity: savingThrowProf.dexterity ? statBonuses.dexterity + 2 : statBonuses.dexterity,
  constitution: savingThrowProf.constitution ? statBonuses.constitution + 2 : statBonuses.constitution,
  intelligence: savingThrowProf.intelligence ? statBonuses.intelligence + 2 : statBonuses.intelligence,
  wisdom: savingThrowProf.wisdom ? statBonuses.wisdom + 2 : statBonuses.wisdom,
  charisma: savingThrowProf.charisma ? statBonuses.charisma + 2 : statBonuses.charisma
}
const state = { ...defaultState, savingThrowProf, savingThrows, statBonuses, skillProfs }

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

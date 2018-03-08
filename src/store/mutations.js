function statBonus (stat) {
  return Math.floor((stat - 10) / 2)
}

export const mutations = {
  updateStat (state, val) {
    state.stats = { ...state.stats, ...val }
  },
  updateBonus (state, val) {
    let key = Object.keys(val)[0]
    let value = val[key]
    let bonus = { [key]: statBonus(value) }
    console.log('Bonus updated!', bonus)
    state.statBonuses = { ...state.statBonuses, ...bonus }
  },
  updateSaveProf (state, val) {
    console.log('ST state updated: ', val)
    state.savingThrowProf = { ...state.savingThrowProf, ...val }
  },
  updateSkillProf (state, val) {
    console.log('Skill state updated: ', val)
    state.skillProfs = { ...state.skillProfs, ...val }
  }
}

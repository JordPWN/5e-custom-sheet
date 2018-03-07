<template>
  <div id='saving-throws' class='flex-container column center flex-item'>
    <div class='title flex-item center'>
      Saving Throws
    </div>
    <stat v-for='(stat, name) in savingThrows' :key='name' :name='name' @input='update' :stat='stat' class='row'>
      <proficiency-box :id='"saving-throw-check-" + name' :value='savingThrowProf[name]' @input='updateSaveProf' :label='name' />
    </stat>
  </div>
</template>
<script>
import Stat from './Stat'
import ProficiencyBox from '../common/ProficiencyBox'

import { mapState } from 'vuex'

export default {
  name: 'saving-throws',
  components: {
    Stat,
    ProficiencyBox
  },
  computed: {
    ...mapState(['savingThrowProf', 'statBonuses']),
    savingThrows () {
      let temp = {}
      for (let index in this.statBonuses) {
        temp[index] = this.statBonuses[index]
        if (this.savingThrowProf[index]) temp[index] = (temp[index] + 2)
      }
      return temp
    }
  },
  methods: {
    update (val) {
      console.log(val)
    },
    updateSaveProf (val, name) {
      let save = {}
      save[name] = val
      this.$store.commit('updateSaveProf', save)
    }
  }
}
</script>
<style lang='scss'>
#saving-throws {
  padding: var(--padding);
  border: var(--border) solid grey;
  .stat {
    display: flex;
    justify-content: space-between !important;
    padding: 0 !important;
    .value {
      width: 1.5em;
    }
    .label {
      display: flex;
      align-items: center;
      width: 50%;
      padding-bottom: 0 !important;
    }
  }
  .value {
    border: none;
  }
  input[type='number'] {
    margin: 0 auto;
    text-align: center;
  }
}
</style>

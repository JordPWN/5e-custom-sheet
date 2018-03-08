<template>
  <div id='skills'>
    <div class='title'>Skills</div>
    <div class='skill-container flex-container column'>
      <div class='skill flex-item row' v-for='(skill, index) in skillValues' :key='index'>
        <proficiency-box :id='"skill-check-" + kebabName(index)' :value='skillProfs[index]' @input='updateSkillProf' :label='index' />
        <input-number :value='skill' />
        <label>{{ index }} ({{skills[index]}})</label>
      </div>
    </div>
  </div>
</template>
<script>
import InputNumber from '../common/InputNumber'
import ProficiencyBox from '../common/ProficiencyBox'

import skills from '../../libraries/skills.js'

import { mapState } from 'vuex'

export default {
  name: 'skills',
  components: {
    InputNumber,
    ProficiencyBox
  },
  computed: {
    ...mapState(['statBonuses', 'skillProfs']),
    skillValues () {
      let temp = {}
      for (let index in this.skillProfs) {
        temp[index] = this.statBonuses[this.skills[index]]
        if (this.skillProfs[index]) temp[index] = (temp[index] + 2)
      }
      return temp
    }
  },
  methods: {
    updateSkillProf (val, name) {
      let skill = {}
      skill[name] = val
      this.$store.commit('updateSkillProf', skill)
    },
    kebabName (name) {
      return name.replace(/\s+/g, '-')
    }
  },
  data () {
    return {
      skills: skills
    }
  }
}
</script>
<style lang='scss' scoped>
#skills {
  border: var(--border) solid grey;
  padding: var(--padding);
  input[type='checkbox'] {
    border-radius: 2em;
  }
  input[type='number'] {
    width: 1em;
    text-align: center;
    border-bottom: var(--border) solid grey;
    margin-right: 1em;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
}
label {
  text-transform: capitalize;
}
.skill > label {
  width: 100%;
  align-self: center;
  text-align: right;
}
</style>

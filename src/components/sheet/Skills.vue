<template>
  <div id='skills'>
    <div class='title'>Skills</div>
    <div class='skill-container flex-container column'>
      <div class='skill flex-item row' v-for='(skill, index) in skills' :key='index'>
        <input :id='"checkbox" + index' type='checkbox' />
        <!-- <proficiency-box :id='"saving-throw-check-" + name' :value='savingThrowProf[name]' @input='updateSaveProf' :label='name' /> -->
        <input-number :value='statBonuses[skill.stat]' />
        <label>{{ skill.name }} ({{skill.stat}})</label>
      </div>
    </div>
  </div>
</template>
<script>
import InputNumber from '../common/InputNumber'

import { mapState } from 'vuex'

export default {
  name: 'skills',
  components: {
    InputNumber
  },
  computed: {
    ...mapState(['statBonuses'])
  },
  data () {
    return {
      skills: [
        {
          name: 'acrobatics',
          stat: 'dexterity'
        },
        {
          name: 'animal handling',
          stat: 'wisdom'
        },
        {
          name: 'arcana',
          stat: 'intelligence'
        },
        {
          name: 'athletics',
          stat: 'strength'
        },
        {
          name: 'deception',
          stat: 'charisma'
        },
        {
          name: 'history',
          stat: 'intelligence'
        },
        {
          name: 'insight',
          stat: 'wisdom'
        },
        {
          name: 'intimidation',
          stat: 'charisma'
        },
        {
          name: 'investigation',
          stat: 'intelligence'
        },
        {
          name: 'medicine',
          stat: 'wisdom'
        },
        {
          name: 'nature',
          stat: 'intelligence'
        },
        {
          name: 'perception',
          stat: 'wisdom'
        },
        {
          name: 'performance',
          stat: 'charisma'
        },
        {
          name: 'persuasion',
          stat: 'charisma'
        },
        {
          name: 'religion',
          stat: 'intelligence'
        },
        {
          name: 'stealth',
          stat: 'dexterity'
        },
        {
          name: 'sleight of hand',
          stat: 'dexterity'
        },
        {
          name: 'survival',
          stat: 'wisdom'
        }
      ]
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

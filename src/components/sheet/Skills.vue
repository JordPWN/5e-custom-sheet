<template>
  <div id='skills'>
    <div class='title'>Skills</div>
    <div class='skill-container flex-container column'>
      <div class='skill flex-item row' v-for='(skill, index) in skills' :key='index'>
        <input :id='"checkbox" + index' type='checkbox' />
        <input-number value='0' />
        <label>{{ skill.name }} ({{skill.stat}})</label>
      </div>
    </div>
  </div>
</template>
<script>
import InputNumber from '../common/InputNumber'

export default {
  name: 'skills',
  components: {
    InputNumber
  },
  data () {
    return {
      skills: [
        {
          name: 'acrobatics',
          stat: 'dex'
        },
        {
          name: 'animal handling',
          stat: 'wis'
        },
        {
          name: 'arcana',
          stat: 'int'
        },
        {
          name: 'athletics',
          stat: 'str'
        },
        {
          name: 'deception',
          stat: 'cha'
        },
        {
          name: 'history',
          stat: 'int'
        },
        {
          name: 'insight',
          stat: 'wis'
        },
        {
          name: 'intimidation',
          stat: 'cha'
        },
        {
          name: 'investigation',
          stat: 'int'
        },
        {
          name: 'medicine',
          stat: 'wis'
        },
        {
          name: 'nature',
          stat: 'int'
        },
        {
          name: 'perception',
          stat: 'wis'
        },
        {
          name: 'performance',
          stat: 'cha'
        },
        {
          name: 'persuasion',
          stat: 'cha'
        },
        {
          name: 'religion',
          stat: 'int'
        },
        {
          name: 'stealth',
          stat: 'dex'
        },
        {
          name: 'sleight of hand',
          stat: 'dex'
        },
        {
          name: 'survival',
          stat: 'wis'
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

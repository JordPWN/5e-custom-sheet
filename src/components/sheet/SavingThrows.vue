<template>
  <div id='saving-throws' class='flex-container column center'>
    <div class='title flex-item center'>
      Saving Throws
    </div>
    <stat v-for='(stat, index) in stats' :key='index' :stat='stat.value' :name='stat.name' class='row' />
  </div>
</template>
<script>
import Stat from './Stat'
export default {
  name: 'saving-throws',
  components: {
    Stat
  },
  data () {
    return {
      stats: [
        {
          name: 'Strength',
          value: 2
        },
        {
          name: 'Dexterity',
          value: 2
        },
        {
          name: 'Constitution',
          value: 2
        },
        {
          name: 'Intelligence',
          value: 2
        },
        {
          name: 'Wisdom',
          value: 2
        },
        {
          name: 'Charisma',
          value: 2
        }
      ]
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

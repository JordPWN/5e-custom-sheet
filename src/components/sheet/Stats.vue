<template>
  <div id='stats'>
    <stat v-for='(stat, index) in stats' :key='index' :stat='stat' />
  </div>
</template>
<script>
import Stat from './Stat'
export default {
  name: 'stats',
  components: {
    Stat
  },
  data () {
    return {
      stats: [
        {
          name: 'Strength',
          value: 18
        },
        {
          name: 'Dexterity',
          value: 18
        },
        {
          name: 'Constitution',
          value: 18
        },
        {
          name: 'Intelligence',
          value: 18
        },
        {
          name: 'Wisdom',
          value: 18
        },
        {
          name: 'Charisma',
          value: 18
        }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
</style>

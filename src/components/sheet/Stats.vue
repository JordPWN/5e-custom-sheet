<template>
  <div id='stats' class='flex-container column center'>
    <stat v-for='(stat, name) in stats' :key='name' :stat='stat' :name='name' @input='updateStat' :bonusToggle='true'/>
  </div>
</template>

<script>
import Stat from './Stat'

import { mapState } from 'vuex'

export default {
  name: 'stats',
  components: {
    Stat
  },
  computed: {
    ...mapState(['stats'])
  },
  methods: {
    updateStat (val, name) {
      console.log('Updating stat: ', val, ' ', name)
      this.$store.commit('updateStat', val, name)
    }
  }
}
</script>

<style lang='scss' scoped>
#stats {
  border: .025em solid grey;
  padding: var(--padding);
  // > div {
  //   width: 25vw;
  // }
}
</style>

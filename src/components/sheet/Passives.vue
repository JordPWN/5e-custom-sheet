<template>
  <div id='passives' class='flex-container column'>
    <div class='flex row space-between'>
      <div class='flex'>
        <span class='title'>Passive Insight(Wis):</span>
      </div>
      <div class='flex calc'>
        <span>Misc:<input-number class='stat' type='number' v-model='insightMisc'/></span>=<input-number class='stat' type='number' :value='insight'/>
      </div>
    </div>
    <div class='flex row space-between'>
      <div class='flex'>
        <span class='title'>Passive Perception(Wis):</span>
      </div>
      <div class='flex calc'>
        <span>Misc:<input-number class='stat' type='number' v-model='perceptionMisc'/></span>=<input-number class='stat' type='number' :value='perception'/>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from '../common/InputNumber'

import { mapState } from 'vuex'

export default {
  name: 'passives',
  components: {
    InputNumber
  },
  data () {
    return {
      insightMisc: 0,
      perceptionMisc: 0
    }
  },
  methods: {
    addProficiency (skill) {
      if (this.skillProfs[skill]) return 2
      return 0
    }
  },
  computed: {
    ...mapState(['skillProfs', 'statBonuses']),
    insight () {
      return this.statBonuses['wisdom'] + this.addProficiency('insight') + this.insightMisc
    },
    perception () {
      return this.statBonuses['wisdom'] + this.addProficiency('perception') + this.perceptionMisc
    }
  }
}
</script>

<style lang='scss' scoped>
#passives {
  margin-top: var(--padding);
  border: var(--border) solid grey;
  padding: var(--padding);
  font-size: .6em;
  .flex {
    display: flex;
    align-items: center;
    &.calc {
      width: 10em;
      justify-content: space-between;
    }
    .title {
      justify-content: flex-start;
    }
    input[type='number'] {
      font-size: inherit;
      text-align: center;
      width: 1em;
    }
  }
}
</style>

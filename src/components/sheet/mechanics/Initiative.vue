<template>
  <div id='initiative' class='flex-container column'>
    Initiative
    <div class='flex-container row'>
      <div class='flex-item'>
        <span class='fixed no-edit'>Dex: {{ statBonuses['dexterity'] }}</span>
        <span>&nbsp;+ <input-number class='small' placeholder='misc' v-model='misc' /></span>
      </div>
    </div>
    <div class='flex-item'>
       <input-number :value='total' class='total' />
    </div>
  </div>
</template>

<script>
import InputNumber from '../../common/InputNumber'

import { mapState } from 'vuex'

export default {
  name: 'initiative',
  components: {
    InputNumber
  },
  computed: {
    ...mapState(['statBonuses']),
    total () {
      return this.statBonuses['dexterity'] + ((this.misc === 'misc') ? 0 : this.misc)
    }
  },
  data () {
    return {
      misc: 'misc'
    }
  }
}
</script>

<style lang='scss' scoped>
#initiative {
  width: 100%;
  border: var(--border) solid grey;
  padding: var(--padding);
  .flex-container {
  }
  .flex-item {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .fixed {
    font-size: .8em;
  }
}
</style>

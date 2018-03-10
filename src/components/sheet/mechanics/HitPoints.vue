<template>
  <div id='hit-points' class='flex-container column'>
    <div class='title flex row space-between' :title='tooltip'>
      Hit Point Max: <input />
    </div>
    <div class='flex row space-between'>
      Current Hit Points: <input />
    </div>
  </div>
</template>

<script>
import InputNumber from '../../common/InputNumber'

import tooltips from '../../../libraries/tooltips'

export default {
  name: 'hit-points',
  components: {
    InputNumber
  },
  data () {
    return {
      tooltip: tooltips.hp
    }
  }
}
</script>

<style lang='scss' scoped>
#hit-points {
  height: 5em;
  width: calc(100% - (var(--padding) * 2));
  border: var(--border) solid grey;
  padding: var(--padding);
  justify-content: flex-start;
  .flex {
    align-items: center;
  }
  input {
    height: inherit;
    width: 5em;
  }
}
</style>

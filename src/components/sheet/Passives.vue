<template>
  <div id='passives' class='flex-container column'>
    <div class='flex row space-between'>
      <div class='flex'>
        <span class='title'>Passive Insight(Wis):</span>
      </div>
      <div class='flex calc'>
        <span>Misc:<input-number class='stat' type='number' value='0'/></span>=<input-number class='stat' type='number' value='2'/>
      </div>
    </div>
    <div class='flex row space-between'>
      <div class='flex'>
        <span class='title'>Passive Perception(Wis):</span>
      </div>
      <div class='flex calc'>
        <span>Misc:<input-number class='stat' type='number' value='0'/></span>=<input-number class='stat' type='number' value='2'/>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from '../common/InputNumber'

export default {
  name: 'passives',
  components: {
    InputNumber
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

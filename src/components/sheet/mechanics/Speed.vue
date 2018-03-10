<template>
  <div id='speed' class='flex-container column'>
    Speed
    <div class='flex-item'>
      <input-number value='30' step='5' class='total'/><span>ft</span>
    </div>
  </div>
</template>
<script>
import InputNumber from '../../common/InputNumber'

export default {
  name: 'speed',
  components: {
    InputNumber
  }
}
</script>
<style lang='scss' scoped>
#speed {
  width: 100%;
  height: auto;
  border: var(--border) solid grey;
  padding: var(--padding);
  align-items: center;
  justify-content: center;
  .flex-item {
    span {
      display: flex;
      align-items: center;
    }
  }
}
</style>

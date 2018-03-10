<template>
  <div id='temp-hp' class='flex-container column center'>
    <div class='title'>
      Temp HP
    </div>
    <input-number class='flex' value='' />
  </div>
</template>

<script>
import InputNumber from '../../common/InputNumber'

export default {
  name: 'temp-hp',
  components: {
    InputNumber
  }
}
</script>

<style lang='scss' scoped>
#temp-hp {
  height: 5em;
  justify-content: flex-start;
  width: calc(100% - (var(--padding) * 2));
  border: var(--border) solid grey;
  padding: var(--padding);
}
</style>

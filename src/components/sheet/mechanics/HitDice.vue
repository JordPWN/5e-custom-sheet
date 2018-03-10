<template>
  <div id='hit-dice' class='flex-container column center'>
    <span class='title'>Hit Dice</span>
    <div class='flex-item'>
      2 <span class='no-edit'>d8</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hit-dice'
}
</script>

<style lang='scss' scoped>
#hit-dice {
  width: 100%;
  height: auto;
  border: var(--border) solid grey;
  padding: var(--padding);
  .flex-item {
    align-items: center;
  }
}
</style>

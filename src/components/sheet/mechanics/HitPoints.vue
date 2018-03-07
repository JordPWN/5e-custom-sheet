<template>
  <div id='hit-points'>
    HP
  </div>
</template>

<script>
export default {
  name: 'hit-points'
}
</script>

<style lang='scss' scoped>
#hit-points {
  width: calc(100% - (var(--padding) * 2));
  border: var(--border) solid grey;
  padding: var(--padding);
}
</style>

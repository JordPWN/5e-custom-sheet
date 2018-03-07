<template>
  <div id='temp-hp'>
    Temp HP
  </div>
</template>
<script>
export default {
  name: 'temp-hp'
}
</script>
<style lang='scss' scoped>
#temp-hp {
  width: calc(100% - (var(--padding) * 2));
  border: var(--border) solid grey;
  padding: var(--padding);
}
</style>

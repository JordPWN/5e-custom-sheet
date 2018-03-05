<template>
  <div class='stat'>
    <div class='label'>
      {{ stat.name }}
    </div>
    <div class='value'>
      {{ stat.value }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'stat',
  props: ['stat']
}
</script>
<style lang='scss' scoped>
</style>

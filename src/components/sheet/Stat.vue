<template>
  <div class='stat flex-container column center'>
    <div class='label flex-item center'>
      {{ stat.name }}
    </div>
    <div class='value flex-item center'>
      <input type='number' :value='stat.value' />
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
.stat {
  padding: .5em;
  // border: var(--border) solid grey;
  width: 100%;
  .label {
    padding-bottom: .5em;
  }
  .value {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25em;
    border: .075em solid grey;
    border-radius: 3em;
    width: 1.5em;
    height: 1.5em;
    input[type='number'] {
      font-size: 1.3em;
      width: inherit;
      border: none;
      border-bottom: var(--border) solid grey;
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  }
}
</style>

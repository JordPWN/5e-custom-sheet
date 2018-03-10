<template>
  <input type='number' v-model.number='newValue' />
</template>

<script>
export default {
  name: 'input-number',
  props: ['value', 'max'],
  data () {
    return {
      newValue: this.$props.value || 0
    }
  },
  watch: {
    value (val) {
      this.newValue = val
    },
    newValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang='scss' scoped>
input[type='number'] {
  text-align: center;
}
</style>

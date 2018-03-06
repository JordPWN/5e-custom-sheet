<template>
  <input type='number' v-model.number='newValue' />
</template>

<script>
export default {
  name: 'input-number',
  props: ['value'],
  data () {
    return {
      newValue: this.$props.value
    }
  },
  watch: {
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

<template>
  <input type='checkbox' :checked='value' v-model='newValue' />
</template>

<script>
export default {
  name: 'proficiency-box',
  props: ['value', 'label'],
  data () {
    return {
      newValue: this.$props.value
    }
  },
  watch: {
    value (val) {
      this.newValue = val
    },
    newValue (val) {
      this.$emit('input', val, this.label)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>

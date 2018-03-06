<template>
  <div class='form-field flex-container'>
    <label v-if='label'>{{ label }}</label>
    <input
      ref='input'
      :value='value'
      @:input='update($event.target.value)'
      :type='type'
      :name='name'
      :placeholder='placeholder'
      :id='inputId'
      :disabled='disabled'>
  </div>
</template>

<script>
export default {
  name: 'form-field',
  props: {
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    placeholder: String,
    inputId: String,
    value: String,
    disabled: Boolean
  },
  methods: {
    update (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>

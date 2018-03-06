<template>
  <div class='form-select flex-container row'>
    <label v-if='label'>{{ label }}</label>
    <custom-select
      :options='options'
      :type='type'
      :name='label'
    />
  </div>
</template>

<script>
import CustomSelect from './CustomSelect'

export default {
  name: 'form-select',
  components: {
    CustomSelect
  },
  props: ['label', 'options', 'type']
}
</script>

<style lang='scss' scoped>
</style>

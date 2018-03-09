<!-- <template v-if='type === "select"'>
  <select class='select'>
    <option v-for='(item, index) in options' :value='item' :key='index'>
      {{ item }}
    </option>
  </select>

   v-else-if='type === "datalist"'
</template> -->

<template>
  <div class='datalist'>
    <input :list='name' v-model='newValue'/>
    <datalist class='datalist' :id='name'>
      <option v-for='(item, index) in options' :value='item' :key='index' >
        {{ item }}
      </option>
    </datalist>
  </div>
</template>

<!-- <template v-else>
  <span>No input provided.</span>
</template> -->

<script>
export default {
  name: 'custom-select',
  props: {
    options: Array,
    type: {
      type: String,
      default: 'select'
    },
    name: {
      type: String,
      default: this.type
    },
    value: String
  },
  data () {
    return {
      newValue: this.value
    }
  }
}
</script>

<style lang='scss'>
.datalist {
    text-transform: capitalize;
}
</style>

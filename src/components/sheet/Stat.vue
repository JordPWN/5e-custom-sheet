<template>
  <div class='stat flex-container column center'>
    <div class='label flex-item center'>
      <slot/>{{ name }}
    </div>
    <div class='value flex-item center'>
      <input-number v-model='statUpdate' />
    </div>
    <input v-if='bonusToggle === true' :value='bonus' class='bonus value'/>
  </div>
</template>

<script>
import InputNumber from '../common/InputNumber'

export default {
  name: 'stat',
  components: {
    InputNumber
  },
  props: ['stat', 'name', 'bonusToggle'],
  computed: {
    bonus () {
      let temp = 0
      temp = Math.floor((this.statUpdate - 10) / 2)
      return temp
    }
  },
  data () {
    return {
      statUpdate: this.stat
    }
  },
  watch: {
    stat (val) {
      this.statUpdate = val
    },
    statUpdate (val) {
      let temp = {[this.name]: val}
      this.$emit('input', temp)
    }
  }
}
</script>

<style lang='scss' scoped>
.stat {
  padding: .5em;
  width: 100%;
  .bonus {
    padding: .05em !important;
    font-size: .8em;
    height: .5em;
    width: .5em;
    right: -1.6em;
    top: -1.6em;
    position: relative;
    text-align: center;
    border: none;
    background-color: white;
  }
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

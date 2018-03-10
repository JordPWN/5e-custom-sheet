<template>
  <div id='death-saves' >
    Death Saves<br />
    <div class='flex-container success-container row space-between'>
      <span class='title'>Successes:</span>
      <span class='flex'>
        <span class='toggle success' :class='{"active": isActive("toggle-success-", index) }' v-for='index in 3' :key='"toggle-success-" + index' @click='toggleActive' :id='"toggle-success-" + index'/>
      </span>
    </div>
    <div class='flex-container failure-container row space-between'>
      <span class='title'>Failures:</span>
      <span class='flex'>
        <span class='toggle failure' :class='{"active": isActive("toggle-failure-", index) }' v-for='index in 3' :key='"toggle-failure-" + index' @click='toggleActive' :id='"toggle-failure-" + index'/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'death-saves',
  data () {
    return {
      'toggle-success-1': false,
      'toggle-success-2': false,
      'toggle-success-3': false,
      'toggle-failure-1': false,
      'toggle-failure-2': false,
      'toggle-failure-3': false
    }
  },
  methods: {
    isActive (string, index) {
      return this[string + index]
    },
    toggleActive (event) {
      this[event.srcElement.id] = !this[event.srcElement.id]
    }
  }
}
</script>

<style lang='scss' scoped>
#death-saves {
  width: 100%;
  border: var(--border) solid grey;
  padding: var(--padding);
  .title {
    padding-right: 1em;
  }
  .flex-container {
    height: auto;
  }
  .toggle {
    display: flex;
    &::after {
      content: '◯';
      width: 1em;
      height: 1em;
    }
    &.active {
      &.success::after {
        content: '☀';
      }
      &.failure::after {
        content: '💀';
      }
    }
  }
}
</style>

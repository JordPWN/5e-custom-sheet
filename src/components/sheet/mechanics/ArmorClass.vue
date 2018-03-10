<template>
  <div id='armor-class'>
    <div class='flex-container column center'>
      <div class='title'>Armor Class</div>
      <div class='flex-container column'>
        <div class='flex-container row space-between'>
          <span>Defenses:</span><span><input-number v-model='defenses'/></span>
        </div>
        <div class='flex-container row space-between'>
          <span>Armor:</span><span><input-number v-model='armor'/></span>
        </div>
        <div class='flex-container row space-between'>
          <span>Shield:</span><span><input-number v-model='shield'/></span>
        </div>
        <div class='flex-container row space-between'>
          <span>Misc:</span><span><input-number v-model='misc'/></span>
        </div>
      </div>
      <input type='number' class='ac' :value='total' />
    </div>
  </div>
</template>

<script>
import InputNumber from '../../common/InputNumber'

export default {
  name: 'armor-class',
  components: {
    InputNumber
  },
  data () {
    return {
      defenses: 0,
      armor: 0,
      shield: 0,
      misc: 0
    }
  },
  computed: {
    total () {
      return this.defenses + this.armor + this.shield + this.misc
    }
  }
}
</script>

<style lang='scss' scoped>
#armor-class {
  border: var(--border) solid grey;
  display: flex;
  padding: var(--padding);
  .flex-container {
    width: 100%;
  }
  input[type='number'] {
    font-size: 1em;
    text-align: center;
    width: 2em;
    &.ac {
      font-size: 1.5em;
    }
  }
}
</style>

<template>
  <div id='proficiency' class='flex-container column center'>
    <div class='title'>
      Proficiency
    </div>
    <div class='flex-item center value'>
      <input-number value='2'/>
    </div>
  </div>
</template>

<script>
import CustomSelect from '../common/CustomSelect'
import InputNumber from '../common/InputNumber'

export default {
  name: 'proficiency',
  components: {
    CustomSelect,
    InputNumber
  }
}
</script>

<style lang='scss' scoped>
#proficiency {
  border: var(--border) solid grey;
  padding: var(--padding);
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
    text-align: center;
    width: inherit;
    border: none;
    border-bottom: var(--border) solid grey;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
}
</style>

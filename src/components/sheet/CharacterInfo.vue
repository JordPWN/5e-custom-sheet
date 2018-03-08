<template>
  <div id='character-info' class='column'>

    <div class='group flex-container row space-evenly'>
      <form-field
      label='Character Name'
      name='name'
      placeholder='Character Name'
      />

      <div class='multiclass-container'>
        <span v-for='(i, index) in classCount' :key='index' class='class-field'>
          <form-select
          label='Class'
          :options='classes'
          type='datalist'
          />
          <input-number />
          <span @click='incrementClass' />
        </span>
      </div>

      <form-select
      label='Race'
      :options='race'
      type='datalist'
      />
    </div>

    <div class='group flex-container row space-evenly'>
      <form-select
        label='Background'
        :options='background'
        type='datalist'
      />

      <form-select
        label='Alignment'
        :options='alignment'
        type='datalist'
      />

      <form-field
        label='Experience'
        name='experience'
      />
    </div>

  </div>
</template>

<script>
import FormField from '../common/FormField'
import FormSelect from '../common/FormSelect'
import InputNumber from '../common/InputNumber'

import characterInfo from '../../libraries/characterInfo'

export default {
  name: 'character-info',
  components: {
    FormField,
    FormSelect,
    InputNumber
  },
  data () {
    return {
      alignment: characterInfo.alignments,
      background: characterInfo.backgrounds,
      classes: characterInfo.classes,
      race: characterInfo.races,
      classCount: 1
    }
  },
  methods: {
    incrementClass () {
      this.classCount += 1
    }
  }
}
</script>

<style lang='scss' scoped>
.class-field {
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    >span::after {
      content: '＋';
      position: relative;
      // top: 5em;
      cursor: pointer;
    }
  }
  > input[type='number'] {
    font-size: 1em;
    border: none;
    width: 1em;
  }
}
#character-info {
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 2em;
  .group {
    > * {
      width: 33%;
      justify-content: center;
    }
    > *:first-child {
      justify-content: flex-start !important;
    }
    > *:last-child {
      justify-content: flex-end;
    }
  }
}
</style>

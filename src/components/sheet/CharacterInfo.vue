<template>
  <div id='character-info' class='column'>

    <div class='group flex-container row space-evenly'>
      <form-field
      label='Character Name'
      name='name'
      placeholder='Character Name'
      />

      <div class='multiclass-container'>
        <span v-for='(i, index) in myClass' :key='index' class='class-field'>
          <span class='remove-class' @click='decrementClass(index)' />
          <form-select
          label='Class'
          :options='classes'
          type='datalist'
          :value='Object.keys(i)[index]'
          @input='updateClass'
          />
          <input-number :value='i[index]' />
          <span class='add-class' @click='addClass' />
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
      classCount: 1,
      myClass: [{warlock: 1}]
    }
  },
  methods: {
    addClass () {
      this.myClass.push({cat: 3})
    },
    decrementClass (index) {
      if (this.myClass.length > 1) this.myClass.splice(index, 1)
    },
    updateClass (val) {
      console.log('update: ', val)
    }
  },
  watch: {
    myClass: {
      handler: function (newVal, oldVal) {
        console.log('new: ', newVal, '\nold: ', oldVal)
      },
      deep: true
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
    >.add-class::after {
      content: '＋';
      position: relative;
      cursor: pointer;
    }
    >.remove-class::before {
      content: '－';
      position: relative;
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

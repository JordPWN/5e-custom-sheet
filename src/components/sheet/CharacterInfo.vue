<template>
  <div id='character-info' class='column'>

    <div class='group flex-container row space-evenly'>
      <form-field
      label='Character Name'
      name='name'
      placeholder='Character Name'
      />

      <form-select
      label='Class'
      :options='classes'
      type='datalist'
      />

      <form-select
      label='Race'
      :options='races'
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

export default {
  name: 'character-info',
  components: {
    FormField,
    FormSelect
  },
  data () {
    return {
      alignment: [
        'lawful good',
        'neutral good',
        'chaotic good',
        'lawful',
        'neutral',
        'chaotic',
        'lawful evil',
        'neutral evil',
        'chaotic evil'
      ],
      background: [
        'adept',
        'sailor'
      ],
      classes: [
        'barbarian',
        'bard',
        'cleric',
        'druid',
        'fighter'
      ],
      races: [
        'human',
        'elf',
        'dwarf'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
#character-info {
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 5em;
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

<template>
  <div id='character-info' class='flex column'>
    <div class='group flex row space-evenly'>
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
    <div class='group flex row space-evenly'>
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
        'Lawful Good',
        'Neutral Good',
        'Chaotic Good',
        'Lawful',
        'Neutral',
        'Chaotic',
        'Lawful Evil',
        'Neutral Evil',
        'Chaotic Evil'
      ],
      background: [
        'Adept',
        'Sailor'
      ],
      classes: [
        'Barbarian',
        'Bard',
        'Cleric'
      ],
      races: [
        'Human',
        'Elf',
        'Dwarf'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
#character-info {
  width: 100%;
  height: 100%;
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

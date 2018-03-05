<template>
  <div id='home'>
    <div class='page-container'>
      <character-sheet />
    </div>
  </div>
</template>

<script>
import CharacterSheet from './sheet/_CharacterSheet'

export default {
  name: 'home',
  components: {
    CharacterSheet
  }
}
</script>

<style lang='scss'>
#home {
  .page-container > div {
    width: 100%;
    height: 100%;
  }
}
</style>

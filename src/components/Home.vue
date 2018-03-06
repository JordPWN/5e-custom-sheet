<template>
  <div id='home' class='flex-container'>
    <div class='page-container flex-container'>
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
  .page-container {
    width: 100vw;
    height: 100%;
    > div {
      width: 100%;
      height: 100%;
    }
  }

}
</style>

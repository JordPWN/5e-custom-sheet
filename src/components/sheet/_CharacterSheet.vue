<template>
  <div id='character-sheet' class='flex column'>
    <div class='header'>
      <character-info />
    </div>

    <div class='body'>
      <div class='left'>
        <stats />
        <proficiency />
        <skills />
        <saving-throws />
        <passives />
      </div>
      <div class='right'>
      </div>
    </div>

    <equipment />
    <attacks />
    <feats />
    <mechanics />
    <roleplaying />
    <traits />
  </div>
</template>

<script>
import Attacks from './Attacks'
import CharacterInfo from './CharacterInfo'
import Equipment from './Equipment'
import Feats from './Feats'
import Mechanics from './Mechanics'
import Passives from './Passives'
import Proficiency from './Proficiency'
import Roleplaying from './Roleplaying'
import SavingThrows from './SavingThrows'
import Skills from './Skills'
import Stats from './Stats'
import Traits from './Traits'

export default {
  name: 'character-sheet',
  components: {
    Attacks,
    CharacterInfo,
    Equipment,
    Feats,
    Mechanics,
    Passives,
    Proficiency,
    Roleplaying,
    SavingThrows,
    Skills,
    Stats,
    Traits
  }
}
</script>

<style lang='scss' scoped>
</style>

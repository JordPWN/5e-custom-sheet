<template>
  <div id='character-sheet' class='flex-container column'>
    <div class='header flex-item row'>
      <character-info />
    </div>

    <div class='body flex-container row'>
      <div id='character-left' class='flex-container column objective'>
        <div class='flex-container row auto-height'>
          <div id='section-1' class='flex-item column left'>
            <stats />
          </div>
          <div id='section-2' class='flex-container column right'>
            <proficiency />
            <saving-throws />
            <skills />
          </div>
        </div>
        <passives />
      </div>
      <div id='character-right' class='flex column'>
        <mechanics />
        <equipment />
        <attacks />
        <feats />
        <roleplaying />
        <traits />
      </div>
    </div>

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
#section-1, #section-2 {
}
#section-1 {
  margin-right: var(--padding);
}
#section-2 {
  height: auto;
  > div {
    margin-bottom: 2em;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
#character-left {
  width: 25%;
  padding-right: var(--padding);
}
.outer-container {
    width: 100%;
    justify-content: space-between;
  > .inner-container {
  }
}
.auto-height {
  height: auto;
}
.body .right {
  font-size: .5rem;
  // width: 100%;
  > .inner-container {
    width: 100%;
    > div {
      margin-bottom: var(--padding);
    }
  }
}
</style>

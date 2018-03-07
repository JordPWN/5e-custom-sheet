<template>
  <div id='mechanics'>
    <div class='flex-container column'>
      <armor-class />
      <div class='flex-container row space-between'>
        <initiative />
        <speed />
      </div>
      <hit-points />
      <temp-hp />
      <div class='flex-container row'>
        <hit-dice />
        <death-saves />
      </div>
    </div>
  </div>
</template>

<script>
import ArmorClass from './mechanics/ArmorClass'
import DeathSaves from './mechanics/DeathSaves'
import HitDice from './mechanics/HitDice'
import HitPoints from './mechanics/HitPoints'
import Initiative from './mechanics/Initiative'
import Speed from './mechanics/Speed'
import TempHitPoints from './mechanics/TempHitPoints'

export default {
  name: 'mechanics',
  components: {
    ArmorClass,
    DeathSaves,
    HitDice,
    HitPoints,
    Initiative,
    Speed,
    'temp-hp': TempHitPoints
  }
}
</script>

<style lang='scss' scoped>
#mechanics {
  width: 100%;
  border: var(--border) solid grey;
  padding: var(--padding);
}
</style>

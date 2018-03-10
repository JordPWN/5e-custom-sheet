<template>
  <div id='equipment' class='flex-container column'>
    <div  class='title'>
      Equipment
    </div>
    <div class='flex-container row'>
      <textarea cols='2'></textarea><textarea cols='2'></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'equipment'
}
</script>

<style lang='scss' scoped>
#equipment {
  width: calc(100% - (var(--padding) * 2));
  border: var(--border) solid grey;
  padding: var(--padding);
  margin-top: 1em;
}
.title {
  padding-bottom: 1em;
}
textarea {
  display: flex;
  resize: none;
  width: 100%;
  // height: inherit;
}
</style>

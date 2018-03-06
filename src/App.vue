<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
:root {
  --border: .01em;
  --padding: 1em;
}
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    > * {
      padding: 5em;
    }
}
.flex {
  display: flex;
}
.flex-container {
  display: flex;
  height: 100%;
  .flex-item {
    display: flex;
    flex: 1 0 auto;
  }
  &.center {
    align-items: center;
    justify-content: center;
  }
}
.column {
  flex-direction: column;
}
.row {
  flex-direction: row;
}
.space-evenly, .space-between {
  display: flex;
  justify-content: space-between;
}
label {
  padding-right: .25em;
}
input {
  border: none;
  border-bottom: var(--border) solid grey;
}
.title {
  font-size: 1rem;
  text-transform: capitalize;
}
.label {
  text-transform: capitalize;
}
input[type='number'] {
  font-size: 1.3em;
  width: inherit;
  border: none;
  border-bottom: var(--border) solid grey;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>

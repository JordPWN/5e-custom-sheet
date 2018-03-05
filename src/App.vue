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
  > * {
    display: flex;
  }
}
.column {
  flex-direction: column;
}
.row {
  flex-direction: row;
}
.space-evenly {
  justify-content: space-between;
}
label {
  padding-right: .25em;
}
input {
  border: none;
  border-bottom: .01em solid grey;
}
</style>

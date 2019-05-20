<template>
  <div id="app">
    <img src="./assets/AAD_logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    align-items: unset !important;
   -webkit-box-align: unset!important;
    padding: 0 !important;
    justify-content:
  }
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

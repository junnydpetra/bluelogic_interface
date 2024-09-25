<template>
  <div class="container-fluid">
    <div class="col-md-2">
      <img alt="Vue logo" src="./assets/bluelogic_sistemas_e_consultoria_logo.png" class="pb-1">
    </div>
  </div>
  <BlueLogic msg="Welcome to Your Vue.js App"/>
</template>

<script>
import BlueLogic from './components/BlueLogic.vue'

export default {
  name: 'App',
  components: {
    BlueLogic
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
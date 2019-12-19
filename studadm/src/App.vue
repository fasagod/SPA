<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
    <!-- <AddGroup/>
    <GroupComponent/> -->
  </div>
</template>

<script>
// import GroupComponent from './components/GroupComponent.vue'
// import AddGroup from './components/AddGroup.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    // AddGroup,
    // GroupComponent

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

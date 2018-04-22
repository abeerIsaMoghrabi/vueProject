<template>
  <div id="app">
  <navBar></navBar>
  <div class="container">
  </div>
<!--   <router-link to="/wis">
     
      
     </router-link> -->
     <router-view></router-view>
    <!--  <wis></wis> -->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import navBar from "./components/navBar";
   import desItem from "./components/dest/desItem";
    import wis from "./components/wis";
export default {
  name: 'App',
  components:{
    navBar,
    desItem,
    wis
  },
 
  computed: mapGetters([
    'evenOrOdd'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
*{
box-sizing: border-box;
}
</style>

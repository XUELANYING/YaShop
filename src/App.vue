<template>
  <div id="app">
    <router-view/>
    <Foot v-if="this.$route.meta.tabFlag"/>
  </div>
</template>
<script>
    import Foot from './common/tabbar/index'

    import Search from './views/search'

    export default {
        created(){

        },
        components: {
            Foot,
            Search
        }
    }
</script>
<style>
  #app, .container {
    height: 100%;
    width: 100%;
  }
  .container {
    padding-bottom: 0.88rem;
    overflow: auto;
  }
</style>
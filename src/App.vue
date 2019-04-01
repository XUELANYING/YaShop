<template>
  <div id="app">
    <router-view/>
    <Foot/>
  </div>
</template>
<script>
    import Foot from './common/tabbar/index'

    import Search from './views/search'

    export default {
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
    padding-top: 1.88rem;
    padding-bottom: 0.88rem;
  }
</style>
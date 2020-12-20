<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
        <router-view v-if="this.$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepAlive"/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  height: 100%;
}
html,body{
  height: 100%;
}
</style>

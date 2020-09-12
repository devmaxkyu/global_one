<template>
  <div id="app">
    <TopNav/>
    <router-view/>
    <FooterBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    TopNav, FooterBar
  }
}
</script>

<style>
html {
  font-size:16px;
}
body {
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
	overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

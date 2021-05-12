<template>
  <div id="app">
    <ParticlesBackground/>
    <div class="main">
      <Content/>
    </div>
  </div>
</template>

<script>
import ParticlesBackground from './components/main/ParticlesBackground.vue'
import Content from './components/main/Content.vue'

export default {
  name: 'App',
  components: { ParticlesBackground, Content}
}
</script>

<style>



#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.main{
  width: 60vw;
  height: 100vh;
  position: relative;
  z-index: 25;
  background-color: rgba(0, 0, 0, 0.450);
}
</style>

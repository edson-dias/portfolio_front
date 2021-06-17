<template>
  <div id="app">
    <ParticlesBackground v-if="windowSize>1000"/>
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
  computed: {
    windowSize(){
      let size = window.innerWidth
      return size
     }
  },
  components: { ParticlesBackground, Content}
}
</script>

<style>

@import url('./assets/fonts/Roboto_Mono/stylesheet.css');
@import url('./assets/fonts/Roboto/stylesheet.css');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #2f333a;
}

.main{
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
    background-color: rgba(0, 0, 0, 0.450);
}

@media only screen and (min-width: 768px) {
.main{
  width: 60vw;
  height: 100%;
  z-index: 25;
  background-color: rgba(0, 0, 0, 0.450);
}
}
</style>

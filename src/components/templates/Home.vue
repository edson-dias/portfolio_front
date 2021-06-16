<template>
  <div id="intro">
    <div class="card">
      <div class="infos">
        <TypeWriting :typeAnimationOn="animation"/>
      </div>
      <div class="icon">
        <i class="fas fa-fast-forward" @click="fastFoward"></i>
      </div>
    </div>
  </div>
</template>

<script>
import TypeWriting from './template-components/TypeWriting'

export default {
  name: 'Home',
  components: {TypeWriting},
  data: function(){
    return {
      animation: true
    }
  },
  methods: {
    fastFoward(){
      this.animation = !this.animation
    }
  }
}
</script>

<style>

  #intro{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .card{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    height: 40%;
    margin-top: 15%;
    background-color: #2f333a88;
    color: white;

  }

  .infos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 60%;
    height: 100%;
    padding-top: 50px;
    padding-left: 150px;
  }

  .icon{
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    width: 40%;
    height: 100%;
    padding-right: 60px;
    padding-top: 50px;
  }

</style>

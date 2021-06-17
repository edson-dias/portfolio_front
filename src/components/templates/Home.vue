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
    justify-content: center;
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
    height: 50%;
    background: #2f333a88;
    color: white;
}

  .infos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
    height: 100%;
    padding-left: 20px;
  }

  .icon{
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    width: 40%;
    height: 100%;
    padding-right: 20px;
    padding-top: 50px;
  }

@media only screen and (min-width: 768px){
  .card{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 60%;
    height: 400px;
    background-color: #2f333a88;
    color: white;
  }

  .infos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
    height: 100%;
    padding-left: 15%;
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
}
</style>

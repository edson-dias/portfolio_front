<template>
  <div id="intro">
    <div class="card">
      <div class="img"><img src="../../assets/self.jpeg" alt="self" width="220" height="280"></div>
      <div class="infos">
        <TypeWriting/>
      </div>
    </div>
  </div>
</template>

<script>
import TypeWriting from './template-components/TypeWriting'

export default {
  name: 'Home',
  components: {TypeWriting},
  methods: {
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
    height: 100%;
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

  .img{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .img img{
    margin-left: 25%;
    border: 2px rgba(255, 255, 255, 0.171) solid;
    border-radius: 5px;
  }

  .infos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 60%;
    height: 100%;
    margin-top: 50px;
    padding: 0;
  }
  
  

</style>

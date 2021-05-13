<template>
  <div id="intro">
    <div class="card">
      <div class="img"><img src="../../assets/self.jpeg" alt="self" width="220" height="280"></div>
      <div class="infos">
        <h2>Edson Flausino Dias Junior</h2>
        <h3>Desenvolvedor Jr</h3>
        <h3>Engenheiro de Controle e Automação</h3>
        <span><i></i><a href="https://github.com/edson-dias">GitHub</a></span>
        <span><i></i><a href="linkedin.com/in/edson-flausino-dias-junior">LinkedIn</a></span>
        <span><i></i><a href="https://twitter.com/edson_fdias">Twitter</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    xablau(){
      let music = new Audio(require('../../assets/keyboard.wav'))
      music.play()
    }
  }
}
</script>

<style>
  @import url('../../assets/fonts/Roboto_Mono/stylesheet.css');
  @import url('../../assets/fonts/Roboto/stylesheet.css');
  
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

  h2{ 
    font-family: 'Roboto';
    font-size: 1.3rem;
    font-weight: 400;
  }

  h3{
    font-family: 'Roboto Mono';
    font-size: 1.1rem;
    font-weight: 300;
  }

</style>


      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: rgba(25, 25, 25);
      }

      .line {
        border-right: 2px solid rgba(255, 255, 255, 0.75);
        color: rgba(255, 255, 255, 0.75);
        font-family: "Special Elite", monospace;
        font-size: 3em;
        text-align: center;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
      }

      .typing-animation {
        animation: blinkCursor 500ms steps(40) infinite normal,
          typing 4s steps(40) 1s normal both;
      }

      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 16em;
        }
      }

      @keyframes blinkCursor {
        from {
          border-right-color: rgba(255, 255, 255, 0.75);
        }
        to {
          border-right-color: transparent;
        }
      }
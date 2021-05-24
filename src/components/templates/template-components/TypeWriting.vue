<template>
  <div class="writing-section">
        <h2 class="line typing-animation">Edson Flausino Dias Junior</h2>
        <h3 class="line typing-animation-two mg-top-25">Desenvolvedor Jr - <i class="fab fa-python"></i> <i class="fab fa-js"></i></h3>
        <h3 class="line typing-animation-three">Engenheiro de Controle e Automação</h3>
        <span class="line typing-animation-four mg-top-30"><a href="https://github.com/edson-dias"><i class="fab fa-github"></i> GitHub</a></span>
        <span class="line typing-animation-five mg-top-5"><a href="https://linkedin.com/in/edson-flausino-dias-junior"><i class="fab fa-linkedin-in"></i> LinkedIn</a></span>
        <span class="line typing-animation-six mg-top-5"><a href="https://twitter.com/edson_fdias"><i class="fab fa-twitter"></i> Twitter</a></span>
  </div>
  
</template>

<script>
export default {
    name: 'TypeWriting'
    
}
</script>

<style scoped>
  .writing-section{
      display: flex;
      flex-direction: column;
  }

  h2{ 
    font-family: 'Roboto';
    font-size: 1.3rem;
    font-weight: 400;
  }

  h3, a{
    font-family: 'Roboto Mono';
    font-size: 1.1rem;
    font-weight: 300;
  }

  a{
    text-decoration: none;
    color: white;
  }

  i{
    color: white;
    font-size: 1.3rem;
  }

  .line {
    color: white;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
  }

  .mg-top-5{
    margin-top: 5px;
  }
  .mg-top-25{
    margin-top: 25px;
  }
  .mg-top-30{
    margin-top: 30px;
  }

  .typing-animation {
    animation: blinkCursor 500ms steps(40) 6 normal,
      typing 2s steps(30) 1s normal both;
    animation-delay: 1s;
  }
  .typing-animation-two {
    animation: blinkCursor 500ms steps(40) 6 normal,
      typing-two 2s steps(30) 1s normal both;
    animation-delay: 4.5s;
  }
  .typing-animation-three {
    animation: blinkCursor 500ms steps(40) 6 normal,
      typing-three 2s steps(30) 1s normal both;
    animation-delay: 8s;
  }
  .typing-animation-four {
    animation: blinkCursor 500ms steps(40) 4 normal,
      typing-four 0.6s steps(30) 1s normal both;
    animation-delay: 11.5s;
  }
  .typing-animation-five {
    animation: blinkCursor 500ms steps(40) 5 normal,
      typing-five 0.7s steps(30) 1s normal both;
    animation-delay: 13.5s;
  }
  .typing-animation-six {
    animation: blinkCursor 500ms steps(40) 8 normal,
      typing-six 0.6s steps(30) 1s normal both;
    animation-delay: 16s;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 13em;
    }
  }
  @keyframes typing-two {
    from {
      width: 0;
    }
    to {
      width: 15em;
    }
  }
  @keyframes typing-three {
    from {
      width: 0;
    }
    to {
      width: 21em;
    }
  }
  @keyframes typing-four {
    from {
      width: 0;
    }
    to {
      width: 6.5em;
    }
  }
  @keyframes typing-five {
    from {
      width: 0;
    }
    to {
      width: 7.8em;
    }
  }
  @keyframes typing-six {
    from {
      width: 0;
    }
    to {
      width: 7em;
    }
  }
  @keyframes blinkCursor {
    from {
      border-right: none;
    }
    to {
      border-right: 2px solid rgba(255, 255, 255, 0.75);
    }
  }


</style>
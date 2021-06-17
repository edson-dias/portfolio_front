<template>
  <div class="writing-section">
        <h2 :class="{typingAnimation: typeAnimationOn, line: true}">Edson Flausino Dias Junior</h2>
        <h3 :class="{typingAnimationTwo: typeAnimationOn, line: true, mgTop25: true}">Desenvolvedor Jr - <i class="fab fa-python"></i> <i class="fab fa-js"></i></h3>
        <h3 :class="{typingAnimationThree: typeAnimationOn, line: true}">Engenheiro de Controle e Automação</h3>
        <span :class="{typingAnimationFour: typeAnimationOn, line: true, mgTop30: true}"><a href="https://github.com/edson-dias"><i class="fab fa-github"></i> GitHub</a></span>
        <span :class="{typingAnimationFive: typeAnimationOn, line: true, mgTop5: true}"><a href="https://linkedin.com/in/edson-flausino-dias-junior"><i class="fab fa-linkedin-in"></i> LinkedIn</a></span>
        <span :class="{typingAnimationSix: typeAnimationOn, line: true, mgTop5: true}"><a href="https://twitter.com/edson_fdias"><i class="fab fa-twitter"></i> Twitter</a></span>
        <span :class="{typingAnimationSeven: typeAnimationOn, line: true, mgTop5: true}"><a href="mailto: edson-fdias@outlook.com"><i class="fas fa-envelope"></i> E-mail</a></span>
  </div>

</template>

<script>
export default {
    name: 'TypeWriting',
    props: {
      typeAnimationOn: Boolean
    }

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
  .mgTop5{
    margin-top: 5px;
    }
  .mgTop25{
    margin-top: 25px;
  }
  .mgTop30{
    margin-top: 30px;
  }

  .typingAnimation {
    animation: blinkCursor 500ms steps(40) 6 normal,
      typing 2s steps(30) 1s normal both;
    animation-delay: 1s;
  }
  .typingAnimationTwo {
    animation: blinkCursor 500ms steps(40) 6 normal,
      typing-two 2s steps(30) 1s normal both;
    animation-delay: 4.5s;
  }
  .typingAnimationThree {
    animation: blinkCursor 500ms steps(40) 6 normal,
      typing-three 2s steps(30) 1s normal both;
    animation-delay: 8s;
  }
  .typingAnimationFour {
    animation: blinkCursor 500ms steps(40) 4 normal,
      typing-four 0.6s steps(30) 1s normal both;
    animation-delay: 11.5s;
  }
  .typingAnimationFive {
    animation: blinkCursor 500ms steps(40) 5 normal,
      typing-five 0.7s steps(30) 1s normal both;
    animation-delay: 13.5s;
  }
  .typingAnimationSix {
    animation: blinkCursor 500ms steps(40) 5 normal,
      typing-six 0.6s steps(30) 1s normal both;
    animation-delay: 16s;
  }
  .typingAnimationSeven {
    animation: blinkCursor 500ms steps(40) 8 normal,
      typing-seven 0.6s steps(30) 1s normal both;
    animation-delay: 18.5s;
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
  @keyframes typing-seven {
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
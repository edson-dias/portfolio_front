<template>
  <div>
    <header>
      <router-link :class="[{actualPage: actualUrl=='home'}, 'navLinks']" to="/">Home</router-link>
      <router-link :class="[{actualPage: actualUrl=='portfolio'}, 'navLinks']" to="/portfolio">Portfólio</router-link>
      <router-link :class="[{actualPage: actualUrl=='curriculum'}, 'navLinks']" to="/curriculum">Curriculum</router-link>
      <router-link :class="[{actualPage: actualUrl=='blog'}, 'navLinks']" to="/blog">Blog</router-link>
      <router-link :class="[{actualPage: actualUrl=='sobre'}, 'navLinks']" to="/sobre">Sobre</router-link>
    </header>
    <section id="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data: function(){
    return{
    }
  },
  computed: {
    actualUrl(){
      return this.$route.name
    }
  }
}
</script>

<style scoped>
  @import url('../../assets/fonts/Roboto_Mono/stylesheet.css');
  @import url('../../assets/fonts/Roboto/stylesheet.css');

  *{
    margin: 0;
    padding: 0;
  }

  header{
    position: absolute;
    top: 4%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    display: flex;
  }

  .navLinks{
    position: relative;
    display: block;
    padding: 8px 35px;
    margin: 20px 0;
    transition: .5s;
    
    text-align: center;
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 1.2rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
  }

  .actualPage{
    transition: .5s;
    color: rgba(255, 255, 255, 0.9);
    background: rgba(88, 88, 88, 0.144);
  }

  .navLinks::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid rgb(110, 110, 110);
    border-bottom: 1px solid rgb(110, 110, 110);
    transform: scaleY(1.5);
    opacity: 0;
    transition: .5s;
    z-index: -1;
  }

  .navLinks:hover::before{
    transform: scaleY(1);
    opacity: 1;
  }

  .navLinks::after{
    content: '';
    position: absolute;
    top: 1px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(88, 88, 88, 0.144);
    transform: scaleY(0);
    transition: .5s;
    z-index: -1;
  }

  .navLinks:hover::after{
    transform: scaleY(1);
  }

  #content{
    width: 100%;
    height: 100%;
  }

</style>
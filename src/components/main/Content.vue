<template>
  <div class="content">
    <header>
        <div id="cellphone" v-if="windowSize<768">
            <i @click="changeNavBar" :class="iconMenu"></i>
			<div :class="isExpanded">
				<router-link :class="[{actualPage: actualUrl=='home'}, 'navLinks']" to="/">Home</router-link>
				<router-link :class="[{actualPage: actualUrl=='portfolio'}, 'navLinks']" to="/portfolio">Portfólio</router-link>
				<router-link :class="[{actualPage: actualUrl=='curriculum'}, 'navLinks']" to="/curriculum">Curriculum</router-link>
			</div>
		</div>
		<div id="desktop" v-else>
			<router-link :class="[{actualPage: actualUrl=='home'}, 'navLinks']" to="/">Home</router-link>
			<router-link :class="[{actualPage: actualUrl=='portfolio'}, 'navLinks']" to="/portfolio">Portfólio</router-link>
			<router-link :class="[{actualPage: actualUrl=='curriculum'}, 'navLinks']" to="/curriculum">Curriculum</router-link>
		</div>
    </header>
    <section>
      <transition name="component-fade" mode="in-out">
      <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data: function(){
    return{
      iconMenu: 'fas fa-angle-double-right',
      isExpanded: 'hiddenNav',
    }
  },
  methods: {
    changeNavBar(){
		this.isExpanded==='expandedNav' ? this.isExpanded='hiddenNav' : this.isExpanded='expandedNav'
		this.iconMenu==='fas fa-angle-double-right' ? this.iconMenu='fas fa-angle-double-left' : this.iconMenu='fas fa-angle-double-right'
    }
  },
  computed: {
    actualUrl(){
      return this.$route.name
    },
    windowSize(){
      return window.innerWidth
    },
  },

}
</script>

<style scoped>
  @import url('../../assets/fonts/Roboto_Mono/stylesheet.css');
  @import url('../../assets/fonts/Roboto/stylesheet.css');

  *{
    margin: 0;
    padding: 0;
  }

  .content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }

  header{
    display: flex;
    width: 100%;
	height: 5%;
  }

  section{
	display: flex;
	flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }

  #cellphone{
	position: absolute;
	top: 20px;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 50px;
	padding: 5px 20px;
  }

  #cellphone i {
	cursor: pointer;
	color: rgba(255, 255, 255, 0.9);
	font-size: 1.5rem;
  }
  #cellphone i:hover{
		color: rgba(255, 255, 255, 0.5);
	}

  .navLinks {
	text-align: center;
	text-decoration: none;
	font-family: 'Roboto';
	font-size: 1.2rem;
	font-weight: bold;
	color: rgba(255, 255, 255, 0.5);
  }

  .actualPage{
    color: rgba(235, 235, 235, 0.95);
  }

  .expandedNav {
	display: flex;
	height: 100%;
	justify-content: space-around;
	animation: opening 2s normal both;
  }
  .hiddenNav {
  height: 100%;
	display: none;
  }

  @keyframes opening {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 100%;
      opacity: 1;
    }
  }


@media only screen and (min-width: 768px) {

  #desktop{
    position: absolute;
    top: 50px;
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

  .component-fade-enter-active, .component-fade-leave-active {
    transition: all 0.3s ease;
  }

}

</style>
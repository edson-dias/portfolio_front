<template>
  <section>
    <div v-if="!stillLoading" class="cards-section">
      <ProjectCard class="cards" v-for="(dicts, k) in projects" :key="k" :data="dicts"/>
    </div>
    <div v-if="stillLoading" class="loading">
		<Loading/>
    </div>
  </section>
</template>

<script>
import ProjectCard from './template-components/ProjectCard'
import Loading from './template-components/Loading'
import {baseEntrypoint} from '@/global'
import axios from 'axios'


export default {
  name: 'Portfolio',
  components: { ProjectCard, Loading},
  data: function(){
    return {
      projects: [],
    }
  },
  methods:{
    getProjects(){
      const url = `${baseEntrypoint}/projects/`
      axios.get(url).then(res => this.projects = res.data)
    }
  },
  computed:{
    stillLoading(){
      if(this.projects.length!=0){
        return false
      }
      else{
        return true
      }
    }
  },
  mounted(){
    this.getProjects()
  }
}
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0px;
  }

  .cards-section{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 10%;
    margin: 0;
  }
  .loading{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  }


</style>
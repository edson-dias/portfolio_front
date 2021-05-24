<template>
  <section>
    <div class="cards-section">
      <ProjectCard class="cards" v-for="(dicts, k) in projects" :key="k" :data="dicts"/>
    </div>
  </section>
</template>

<script>
import ProjectCard from './template-components/ProjectCard'
import axios from 'axios'
import {baseEntrypoint} from '@/global'

export default {
  name: 'Portfolio',
  components: { ProjectCard },
  data: function(){
    return {
      projects: []
    }
  },
  methods:{
    getProjects(){
      const url = `${baseEntrypoint}/projects/`
      axios.get(url).then(res => this.projects = res.data)
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
  }

  .cards-section{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 10%;
    margin: 0;
  }



</style>
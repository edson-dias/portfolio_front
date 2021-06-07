<template>
    <div class="projects">
        <div class="slides">
            <div class="title">
                <h2>{{infos.title}}</h2>
            </div>
            <Carousel id="carousel" :entrypoint="entrypoint" :endpoint="infos.project_image"/>
        </div>
        <div class="infos">
            <div class="bar">
                <div class="subtitles">
                    <h3>Linguagens</h3>
                    <h3>Frameworks</h3>
                    <h3>Links</h3>
                </div>
                <div class="squares">
                    <div class="square">
                        <div class="icons">
                            <span v-for="(langs, k) in infos.languages" :key="k">
                                <i :class="ConvertLanguagesToIcons(langs)"></i><h4>{{langs}}</h4>
                            </span>
                        </div>
                    </div>
                    <div class="square">
                        <div class="frameworks">
                            <span v-for="(img, k) in frameworks" :key="k" >
                                <img :src="`${entrypoint}${img.link}`" width="35px"  height="25px" alt="">
                                <h4>{{img.title}}</h4>
                            </span>
                        </div>
                    </div>
                    <div class="square">
                        <div class="links">
                            <span v-for="(link, k) in links" :key="k">
                                <a :href="link.link"><i :class="link.icon"></i><h4>{{link.title}}</h4></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text">
                <div id="summary" v-if="infos.summary">
                    <h3 class="type">Resumo: </h3>
                    <h4>{{infos.summary}}</h4>
                </div>
                <div id="improvements" v-if="infos.improvements">
                    <h3 class="type">Melhorias Futuras: </h3>
                    <a :href="infos.improvements"><i class="far fa-folder-open"></i><h4>Notion</h4></a>
                </div>
                <div id="credit" v-if="infos.credit">
                    <h3 class="type">Créditos: </h3>
                    <h4>{{infos.credit}}</h4>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

import axios from 'axios'
import {baseEntrypoint, languagesIcons} from '@/global'
import Carousel from './Carousel'

export default {
    name: 'ProjectById',
    components: {Carousel},
    data: function(){
        return{
            infos: {},
        }
    },
    methods: {
        getDataFromUrlOrFromApi(){
            if (this.$route.params.infos){
                this.infos = this.$route.params.infos
            }
            else{
                const url = `${baseEntrypoint}/projects/${this.$route.params.id}`
                axios.get(url).then(res => this.infos = res.data)
            }
        },
        ConvertLanguagesToIcons(dataLanguage){
            return languagesIcons[dataLanguage]
        },
        ConvertLinks(dataLinks){
            let links = []
            if(dataLinks){
                dataLinks.forEach(link => {
                    const linksArray = link.split(": ")
                    let linksDict = {
                        'title': linksArray[0],
                        'link': linksArray[1],
                    }
                    if(linksDict.title.includes('Github')){
                        linksDict.icon = 'fab fa-github-square'
                    }else{
                        linksDict.icon = 'fas fa-laptop-code'
                    }
                    links.push(linksDict)
                })
            }
            return links
        },
        ConvertFrameworks(dataFrameworks){
            let frameworks = []
            if(dataFrameworks){
                dataFrameworks.forEach(link => {
                    const frameworksArray = link.split(": ")
                    let frameworksDict = {
                        'title': frameworksArray[0],
                        'link': frameworksArray[1],
                    }
                    frameworks.push(frameworksDict)
                })
                return frameworks
            }
        }
    },
    computed: {
        entrypoint(){
            return baseEntrypoint + '/'
        },
        links(){
            return this.ConvertLinks(this.infos.project_links)
        },
        frameworks(){
            return this.ConvertFrameworks(this.infos.frameworks)
        }

    },
    mounted(){
        this.getDataFromUrlOrFromApi()
    }
}
</script>

<style scoped>
    .projects{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .slides{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 50%;
        margin: 0px;
        padding-top: 80px;
    }
    .infos{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 50%;
        margin: 0px;
        padding: 0px;
        margin-top: 25px;

    }
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65%;
        height: 35px;
        margin: 20px 0px;
        background: rgba(63, 63, 63, 0.664);
    }
    .subtitles{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 20%;
        margin-left: 10%;
    }
    .subtitles h3{
        width: 33.3%;
        height: 100%;
        border-bottom: 0px;
    }
    .bar{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 65%;
        height: 180px;
        padding: 10px 20px;
        background: rgba(63, 63, 63, 0.664);
    }
    .squares{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-left: 10%;
    }
    .square{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33.3%;
        height: 100%;
        padding: 0px;
        margin: 0px;
    }
    .icons{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: 100%;
    }
    .frameworks{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
    }
    .links{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: 100%;
    }
    .text{
        display: flex;
        flex-direction: column;
        width: 65%;
        height: 280px;
        margin-top: 25px;
        background: rgba(63, 63, 63, 0.664);
        padding: 0px;
        margin-bottom: 30px;
    }
    #summary{
        display: flex;
        flex-grow: 2;
        width: 100%;
        margin: 0px;
        padding: 10px;
        text-align: justify;
        border-top: 0px;
    }
    #improvements{
        display: flex;
        width: 100%;
        flex-grow: 1;
        margin: 0px;
        padding: 10px;
        text-align: justify;
        border-top: 0px;
    }
    #credit{
        display: flex;
        width: 100%;
        flex-grow: 1;
        margin: 0px;
        padding: 10px;
        text-align: justify;
        border-top: 0px;
    }
    .type{
        height: 100%;
        width: 100px;
    }
    .icons i{
        margin-right: 15px;
        font-size: 1.4rem;
        color: white;
    }
    .frameworks img{
        margin-right: 15px;
        border-radius: 2px;
    }

    .links i{
        margin-right: 15px;
        font-size: 1.4rem;
        color: white;
    }

    h2, h3, h4{
        font-family: 'Roboto Mono';
        color: white;
        margin: 0px;
    }
    h2{
        font-size: 1.2rem;
    }
    h3{
        font-size: 0.9rem;
    }
    h4{
        font-size: 0.8rem;
    }
    span{
        display: flex;
        margin: 4px 0px;
    }
    #carousel{
        width: 65%;
    }
    a{
        display: flex;
        text-decoration: none;
    }
    a:hover{
		color: rgba(255, 255, 255, 0.5);
    }
	a h4:hover{
		color: rgba(255, 255, 255, 0.5);
	}
	a i{
		margin-right: 10px;
	}

</style>
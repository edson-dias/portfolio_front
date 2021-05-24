<template>
	<div v-if="expanded">
		<div class="expanded">
		
		</div>
	</div>
	<div v-else>
		<div class="card">
			<div class="imgBx">
				<img :src="mainImage" alt="main project image">
				
					<h2>Projeto: {{data.title}}</h2>
					<span>{{data.status}}</span>
					<div class="icons">
						<i v-for="(langs, k) in data.languages" :key="k" :class="ConvertLanguagesToIcons(langs)"></i>
					</div>
			</div>
			<div class="content">
				<div class="links">
					<router-link to="/">Detalhes</router-link>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import {baseEntrypoint} from '@/global'

export default {
  props: {
    data: {}
  },
  data: function(){
    return{
		expanded: false
    }
  },
  methods: {
      ConvertLanguagesToIcons(dataLanguage){
        const languagesIcons = {
          'JavaScript': 'fab fa-js',
          'Python': 'fab fa-python',
          'CSS': 'fab fa-css3-alt',
          'HTML': 'fab fa-html5'
        }
        return languagesIcons[dataLanguage]
      },
    },
  computed: {
    mainImage(){
      return baseEntrypoint + '/' + this.data.project_image[0]
    }
  },
}
</script>

<style scoped>
	.card{
		position: relative;
		max-width: 350px;
		height: 420px;
		background: #2f333a88;
		margin: 20px 10px;
		padding: 20px 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
		transition: 0.5s ease-in-out;
	}

	.card:hover{
		height: 460px;
	}

	.card .imgBx{
		position: relative;
		width: 100%;
		height: 400px;
		top: -50px;
		z-index: 1;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card .imgBx img{
		max-width: 100%;
		height: 260px;
		border-radius: 4px;
		margin-bottom: 20px;
	}

	.card .content{
		position: relative;
		margin-top: -100px;
		padding: 10px 15px;
		text-align: center;
		visibility: hidden;
		opacity: 0;
		transition: 0.3s;
	}

	.card:hover .content{
		visibility: visible;
		opacity: 1;
		margin-top: -40px;
		transition-delay: 0.3s;
	}

	h2, span{
		font-family: 'Roboto Mono';
		font-size: 1rem;
		font-weight: 300;
		color: white;
		margin-bottom: 10px;
	}

	span{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 30px;
		border-radius: 8px;
		background-color: rgba(27, 32, 34, 0.925);
		text-align: center;
		margin-left: 5px;
	}

	.icons{
		display: inline;
		font-size: 1.6rem;
		color: antiquewhite;
	}

	.icons i{
		padding: 0px 8px;
	}

	.links{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 40px;
		border-radius: 4px;
		background: rgba(20, 20, 20, 0.432);
		transition: 0.6s;
	}

	.links a{
		font-family: 'Roboto Mono';
		font-size: 1rem;
		font-weight: 500;
		text-decoration: none;
		color: white;
	}

	.links:hover{
		background-color: rgba(0, 0, 0, 0.397);
	}
</style>

 <!-- 
    "id": 1, 
    "project_image":[ "media/imgs/main.png", "media/imgs/port1.png", "media/imgs/port2.png" ], 
    "project_links":[ 
        "Github - Front: https://github.com/edson-dias/portfolio", 
        "Github - Backend: https://github.com/edson-dias/portfolio_server", 
        "Projeto Online: 127.0.0.1:8080/" 
      ], 
    "languages": [ "Python", "JavaScript" ], 
    "frameworks": [ "Django Rest Framework", "Django", "VueJS" ], 
    "title": "Portfólio", 
    "status": "On Going", 
    "summary": "Projeto de um site pessoal, contendo apresentação pessoal, currículo e portfólio.", 
    "justification": "Frontend construído com JavaScript, CSS e HTML.\r\nBackend construído com Xablau", 
    "improvements": "Tem que melhorar aí", 
    "credit": "Créditos pra mim" }
    
    
    js -> fab fa-js
    python -> fab fa-python
    css -> fab fa-css3-alt
    html -> fab fa-html5

    vue -> fab fa-vuejs
    bootstrap -> fab fa-bootstrap
    django -> <img src="@/assets/logos/django-logo.png" width="60px" height="30px" alt="">
    DRF -> <img src="@/assets/logos/drf-logo.png" width="60px" height="30px" alt="">
    
     -->
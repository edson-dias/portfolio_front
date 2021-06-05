<template>
	<div>
		<div class="text type">
			<div class="header">
				<h4 v-for="(h, k) in data.header" :key="k">{{h}}</h4>
			</div>
			<div class="resume">
				<div class="title">
					<h3>Resumo</h3>
				</div>
				<ul>
					<li v-for="(i, k) in data.resume" :key="k">
						{{i}}
					</li>
				</ul>
			</div>
			<div class="schooling">
				<div class="title">
					<h3>Formação</h3>
				</div>
				<div class="courses">
					<ul>
						<li v-for="(f, k) in data.schooling" :key="k">
							<h3>{{f.title}}</h3>
							<h3><b>Instituição:</b> {{f.institute}}</h3>
							<h3><b>Conclusão: </b>{{f.conclusion}}</h3>
						</li>
					</ul>
				</div>
			</div>
			<div class="jobs">
				<div class="title">
					<h3>Experiência Profissional</h3>
				</div>
				<div class="job">
					<ul>
						<li v-for="(j, k) in data.jobs" :key="k">
							<h3>{{j.company}}</h3>
							<h3><b>Cargo:</b> {{j.job_title}}</h3>
							<h3><b>Período: </b>{{j.time}}</h3>
							<h3>Principais Atividades: {{j.main_activities}}</h3>
						</li>
					</ul>
				</div>
			</div>
			<div class="languages">
				<div class="title">
					<h3>Idiomas</h3>
				</div>
				<div class="lang">
					<ul>
						<li v-for="(l, k) in data.languages" :key="k">
							<h3>{{l.language}}</h3>
							<h3><b>Instituição:</b> {{l.institute}}</h3>
						</li>
					</ul>
				</div>
			</div>
			<div class="activities">
				<div class="title">
					<h3>Cursos e Atividades Complementares</h3>
				</div>
				<div class="activ">
					<ul>
						<li v-for="(a, k) in data.activities" :key="k">
							<h3>{{a}}</h3>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div :class="!stillLoading ? 'download':'downloadi'">
			<a :href="data.file"><i class="fas fa-file-pdf"></i> <h3>Download PDF</h3></a>
		</div>
		<div class="loading" v-if="stillLoading">
			<Loading/>
		</div>
	</div>
</template>

<script>
import {baseEntrypoint} from '@/global.js'
import axios from 'axios'
import Loading from './template-components/Loading.vue'

export default {
	name: 'Curriculum',
	components: {Loading},
	data: function(){
		return {
			stillLoading: true,
			pdfData: {}
		}
	},
	methods: {
		getPDF(){
			const url = baseEntrypoint + '/curriculum/'
			axios.get(url).then(res => this.pdfData = res.data).then(this.stillLoading = false)
		},
		textHandler(dictString){
			return dictString.split(';')
		},
		dataHandler(dictData){
			let data = {}
			const header = this.textHandler(dictData.header)
			const target = dictData.target
			const resume = this.textHandler(dictData.resume)
			const schooling = dictData.schooling
			const jobs = dictData.jobs
			const languages = dictData.language
			const activities = this.textHandler(dictData.courses)
			const file = dictData.files

			data = {
				'header': header,
				'target': target,
				'resume': resume,
				'schooling': schooling,
				'jobs': jobs,
				'languages': languages,
				'activities': activities,
				'file': file
			}
			return data
		}
	},
	computed: {
		data(){
			if(this.pdfData[0]){
				return this.dataHandler(this.pdfData[0])
			}
			return ''
		}
	},
	mounted(){
		this.getPDF()
	}
}
</script>

<style scoped>
	div{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: max-content;
		font-family: 'Roboto Mono';
		color: white;
	}
	.text{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 80%;
		height: 100%;
		margin-top: 100px;
		margin-bottom: 50px;
		background-color: #2f333a96;
		opacity: 0%;

	}
	.texti{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 80%;
		height: 100%;
		margin-top: 100px;
		margin-bottom: 50px;
		background-color: #2f333a96;
		opacity: 0%;
		transition: 3s;
	}
	.header{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		height: 20%;
		padding: 20px;
	}
	.header h4{
		font-size: 1rem;
		margin: 10px 0px;
	}
	.resume{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		height: 40%;
		margin-top: 40px ;
		padding: 0px 20px;
	}
	.schooling{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		height: 40%;
		padding: 0px 20px;
	}
	.courses{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
	}
	.jobs{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		padding: 0px 20px;
	}
	.languages{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		padding: 0px 20px;
	}
	.activities{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		padding: 0px 20px;
	}
	.courses h3{
		font-size: 1rem;
		font-weight: 400;
	}
	.lang{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.jobs h3{
		font-size: 1rem;
		font-weight: 400;
	}
	.languages h3{
		font-size: 1rem;
		font-weight: 400;
	}
	.activities h3{
		font-size: 1rem;
		font-weight: 400;
	}
	.activ{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}
	ul{
		padding-top: 5px;
	}
	li{
		font-size: 1rem;
		margin: 8px 0px;
	}
	.courses li{
		margin: 25px 0px;
	}
	.jobs li{
		margin: 25px 0px;
	}
	.lang li{
		margin: 25px 0px;
	}
	.activ li{
		margin: 15px 0px;
	}
	.title{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: row;
		width: 100%;
		height: 30px;
		padding-left: 10px;
		border: 0px;
		background-color: rgba(30, 93, 210, 0.096);
	}
	.title h3{
		margin: 0px;
		padding: 0px;
		font-family: 'Roboto';
		font-size: 1.2rem;
		font-weight: 500;
	}
	.download{
		position: absolute;
		width: 150px;
		height: 50px;
		top: 15%;
		left: 50%;
		transform: translate(180%, -50%);
			opacity: 100%;
				transition: 6s;
	}
	.downloadi{
		position: absolute;
				width: 150px;
				height: 50px;
				top: 15%;
				left: 50%;
				transform: translate(180%, -50%);
					opacity: 0%;
						transition: 6s;
	}

	.type{
		animation: xablau 1s 1 normal both;
	}
	@keyframes xablau{
		25%{
			opacity: 25%;
		}
		50%{
			opacity: 50%;
		}
		100%{
			opacity: 100%;
		}
	}
	.loading{
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	a{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-decoration: none;
	}
	a i{
		font-size: 1.6rem;
		color: rgb(170, 33, 33);
	}
	a h3{
		font-size: 1rem;
		margin-left: 10px;
		color: white;
	}
	a h3:hover{
		color: rgba(226, 226, 226, 0.829);
	}

</style>


<template>
	<div>
		<div class="text">
			<div class="header">
				<h4 v-for="(f, k) in header" :key="k">{{f}}</h4>
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
				<div class="courses" v-for="(f, k) in data.schooling" :key="k">

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {baseEntrypoint} from '@/global.js'
import axios from 'axios'

export default {
	name: 'Curriculum',
	data: function(){
		return {
			pdfData: {}
		}
	},
	methods: {
		getPDF(){
			const url = baseEntrypoint + '/curriculum/'
			axios.get(url).then(res => this.pdfData = res.data) 
		},
		textHandler(dictString){
			return dictString.split(';')
		},
		dataHandler(dictData){
			let data = {}
			const header = this.textHandler(dictData.header)
			const target = dictData.target
			const resume = this.textHandler(dictData.resume)

			data = {
				'header': header,
				'target': target,
				'resume': resume,
			}
			return data
		}
	},
	computed: {
		header(){
			if(this.pdfData[0]){
				return this.textHandler(this.pdfData[0].header)
			}
			return ''
		},
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
		height: 100vh;
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
		margin-top: 100px ;
		background-color: #2f333a96;		
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
		margin-top: 50px ;
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
		width: 100%;
		height: 200px;
		background: aqua;
	}
	ul{
		padding-top: 5px;
	}	
	li{
		font-size: 1rem;
		margin: 8px 0px;
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
	}

</style>


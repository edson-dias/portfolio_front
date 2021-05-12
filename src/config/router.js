import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/templates/Home'
import Portfolio from '@/components/templates/Portfolio'
import Curriculum from '@/components/templates/Curriculum'
import Blog from '@/components/templates/Blog'
import Sobre from '@/components/templates/Sobre'

Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },{
        name: 'portfolio',
        path: '/portfolio',
        component: Portfolio
    },{
        name: 'curriculum',
        path: '/curriculum',
        component: Curriculum
    },
    {
        name: 'blog',
        path: '/blog',
        component: Blog
    },
    {
        name: 'sobre',
        path: '/sobre',
        component: Sobre
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
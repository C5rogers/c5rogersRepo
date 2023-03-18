import { createRouter, createWebHistory } from 'vue-router'
import About from '../src/vues/about.vue' //this is importing the vue we want to make it visible to the user
import Home from '../src/vues/home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    }, {
        path: '/about',
        name: 'About',
        component: About,
    }, ] //this will define the whole routes we want to access through route

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    }) //this will make routes as arouter defined so can access it out side of this file

export default router
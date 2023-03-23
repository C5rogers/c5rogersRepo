import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: () =>
            import ('../views/jobs/Jobs.vue')
    },
    {
        path: '/jobs/:id',
        name: 'jobsDetail',
        component: () =>
            import ('../views/jobs/JobsDetail.vue'),
        props: true,
    },
    // redirecting routes
    {
        path: '/all-jobs',
        redirect: '/jobs' //this will redirect the all-jobs request to the jobs page
    },
    // this will show the 404 page for the user if the request is not valid
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () =>
            import ('../views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
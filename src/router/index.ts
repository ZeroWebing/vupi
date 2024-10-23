import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/home/index.vue'
import Ex1Page from '@/pages/ex-page1/index.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/ex1', component: Ex1Page },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/home/index.vue'
import InstallPage from '@/pages/install/index.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/install', component: InstallPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
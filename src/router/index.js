import { createRouter, createWebHashHistory } from 'vue-router'
import video from '../views/video'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: video
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

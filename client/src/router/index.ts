import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Lobby from '../components/Lobby.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/lobby', component: Lobby }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router